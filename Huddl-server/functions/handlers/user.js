const { db, admin } = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');
firebase.initializeApp(config);

// Send hello world as response to request
exports.helloWorld = (req, res) => {
    res.send('Hello World');
};

// Sign up user with email and password
exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        handle: req.body.handle
    };

    // TODO: Need to validate user credentials here

    let token, userID;
    db.doc(`/Users/${newUser.handle}`).get().then(doc => {
        // check to see if user handle is already created if not create account
        if(doc.exists) {
            return res.status(400).json({ errors });
        } else {
            // authentication create new account
            return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);   
        }
    }).then(data => {
        userID = data.user.uid;
        return data.user.getIdToken();        
    }).then(tok => {
        token = tok;
        const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            userID
        };
        return db.doc(`/Users/${newUser.handle}`).set(userCredentials);
    }).then(() => {
        return res.status(201).json({ token });
    }).catch(err => {
        console.error(`Error: ${err}`);
        if(err.code === 'auth/email-already-in-use') {
            return res.status(400).json({ email: 'Email already in use' });
        } else {
            return res.status(500).json({ general: 'Something went wrong. Please try again' });
        }
    });
};