const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert("./credential.json"),
  databaseURL: "https://api-prueba-e9ddf.firebaseio.com"
});

const app = require("./app");

exports.app = functions.https.onRequest(app);
