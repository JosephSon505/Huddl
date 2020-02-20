const { db, admin } = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');

// bring in validation functions from this folder
const { validateSignupData, validateLoginData } = require('../util/validation');

firebase.initializeApp(config);

// Send hello world as response to request
exports.helloWorld = (req, res) => {
    res.send('Hello World');
};

// Sign up user with email and password
exports.signup = (req, res) => {
    // get fields from the body of the request
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        handle: req.body.handle,
        userGroup: req.body.userGroup
    };

    // make sure user fields are valid before proceeding; if not return error
    const { valid, errors } = validateSignupData(newUser);
    if (!valid) return res.status(400).json({ errors });

    // variables needed to create user in database
    let token, userID;

    db.doc(`/Users/${newUser.handle}`).get().then(doc => {
        // check to see if user handle is already created if not create account
        if (doc.exists) {
            errors.handle = 'This handle is already taken';
            return res.status(400).json({ errors });
        } else {
            // authentication create new account
            return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
    }).then(data => {
        userID = data.user.uid;             // get userID for database
        return data.user.getIdToken();      // get token to tell browser user is logged in
    }).then(tok => {
        token = tok;
        const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            userID
        };

        // create user in the database
        return db.doc(`/Users/${newUser.handle}`).set(userCredentials);
    }).then(() => {
        // return success to request
        return res.status(201).json({ token });
    }).catch(err => {
        console.error(`Error: ${err}`);

        // different error codes
        if (err.code === 'auth/email-already-in-use') {
            errors.email = 'Email already in use';
            return res.status(400).json({ errors });
        } else {
            errors.general = 'Something went wrong. Please try again';
            return res.status(500).json({ errors });
        }
    });
};

// login with email and password
exports.login = (req, res) => {
    // get user credentials from the body
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    // make sure user fields are valid before proceeding; if not return error
    const { valid, errors } = validateLoginData(user);
    if (!valid) return res.status(400).json({ errors });

    // login function
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(data => {
        return data.user.getIdToken();
    }).then(token => {
        return res.json(token);
    }).catch(err => {
        console.error(err);
        if(err.code === 'auth/wrong-password') {
            errors.general = 'Incorrect password, Please try again';
            return res.status(403).json({ errors });
        } else if(err.code === 'auth/user-not-found') {
            errors.general = 'Email address not found';
            return res.status(403).json({ errors });
        } else {
            errors.general = err.code;
            return res.status(500).json({ errors });
        }
    });
};

// get the current user's details (logged in account)
exports.getUser = (req, res) => {
    let userData = {};
    db.doc(`/Users/${req.user.handle}`).get().then(doc => {
        if(doc.exists) userData.credentials = doc.data();
        return res.json(userData);
    }).catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    });
}