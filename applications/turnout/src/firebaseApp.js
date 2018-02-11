import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCIuPGo70q4AvBeP6pQ3izHdHV7bkUbq-I",
    authDomain: "turnout-6a20d.firebaseapp.com",
    databaseURL: "https://turnout-6a20d.firebaseio.com",
    projectId: "turnout-6a20d",
    storageBucket: "turnout-6a20d.appspot.com",
    messagingSenderId: "612773350270"
};

export const firebaseApp = firebase.initializeApp(config)