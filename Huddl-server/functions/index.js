const functions = require('firebase-functions');
const app = require('express')();                   // express allows you to have end points with the same name but do different things
const cors = require('cors');

// import handlers
const { helloWorld, signup, login } = require('./handlers/user');

// used for cross platform errors after deploying
app.use(cors());

// Routes
app.get('/helloWorld', helloWorld);
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.https.onRequest(app);