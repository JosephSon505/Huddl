# Huddl


## Before Starting

### Download the following:

* Visual Studio Code: https://code.visualstudio.com/
	* You can use any text editor you want, but for javascript I find this the best because they have some dope extensions
* Node.js: https://nodejs.org/en/
* Postman: https://www.getpostman.com/
	* You can use any app to test API. this is the one I use and am familiar with. Others are probably really similar / identical. Personal preference.

### Command Line Stuff

Firebase tools: 
```
npm install -g firebase-tools
```
Next you have to log in to firebase:
```
firebase login
```
this should take you to a website where you can login with a Gmail account (the provided Huddl account) 



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
firebase deploy
```

If you don't find that the function is working properly, either you messed up (LOL) or you have to restart the app locally