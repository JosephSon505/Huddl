# Huddl


## Before Starting

### Download the following:

* Visual Studio Code: https://code.visualstudio.com/
	* You can use any text editor you want, but for javascript I find this the best because they have some dope extensions
* Node.js: https://nodejs.org/en/
* Postman: https://www.getpostman.com/
	* You can use any app to test API. This is the one I use and am familiar with. Others are probably really similar / identical. Personal preference.

### Command Line Stuff

(Note: You can't run npm commands without download node.js first)

Firebase tools:
```
sudo npm install -g firebase-tools
```
Next you have to log in to firebase:
```
firebase login
```
This should take you to a Google website where you can login with a Gmail account (the provided Huddl account).

If this doesn't open a browser or tab, then I think the terminal gives you a link you can go to.

## After Cloning Repo or Pulling from Github

1. cd into Huddl-client

`
npm install
`

2. cd into Huddl-server
`
npm install
`

These steps are **ESSENTIAL** to you running / deploying your own code. 
Without it, you will not have the correct modules that other people might have installed.



## Basic Structure of Repo

I divided the repo into 2 separate folders: Huddl-server and Huddl-client. 
These folders are exactly what they sound like, server is for the firebase functions for their server, and client is for the front end stuff.

### Huddl-server

Go to the functions folder: this is where everything is.

index.js is where all of the routes are.

util folder holds all of the utility files we need: config, admin / firebase details, helper functions, validation functions, etc.

handlers folder holds all of the handler functions. All routes in index.js will call a function in the handler folder. 

### Huddl-client 

Go to src folder: this is where everything is.

There are two folders here: pages and components.

* Pages: This is where the actual pages you see are going to be
* Components: This is stuff like the navigation bar. Things we can re-use on multiple pages (component of a page)

#### Adding Pages

After you add a page in the pages folder you have to bring it in through a router so that we can actually navigate to the page. 

Example: Say I created a page called user.js

1. Go to /src and open App.js
2. Import user by typing 
```javascript
import user from './pages/user';
```
3. Add the route in between tags `<Switch>`
```javascript
<Route exact path="/user" component={user} />
```


### Important Stuff We Are Using
* Axios
* Material-UI
* react-router-dom

## Testing

### React Changes / Front End Changes

In Huddl-client directory type:
```
npm start
```

If you already have it running locally, I have found that saving your code actually refreshes the page for you.

If not:
<kbd>⌃C</kbd> to stop running locally.

Then
```
npm start
```

you should see your front-end changes now

### Firebase / Backend 

In order to push your edits / new functions to Firebase you **MUST** run these commands. 

Otherwise, your code will not actually change / work.

In Huddl-server directory type:
```
cd functions
firebase deploy
```

If you don't find that the function is working properly, either you messed up (LOL) or you have to restart the app locally



## Deployment

I'll write this stuff after we get gmail and actual files set up. 

TL;DR - you have to use npm run build and deploy that to firebase to host it. It's simple don't worry
