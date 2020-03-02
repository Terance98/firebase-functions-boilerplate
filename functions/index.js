const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send("Hello there!")
});

app.listen(3000, () => console.log("App listening on port 3000!"));


exports.app = functions.https.onRequest(app);
