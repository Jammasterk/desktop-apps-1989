const firebase = require('firebase')

const firebaseConfig = {
	apiKey: "AIzaSyALjkgi8-yfO60aHxaLQS0ah2e91JGTvAg",
	authDomain: "fitness-app-7fefa.firebaseapp.com",
	projectId: "fitness-app-7fefa",
	storageBucket: "fitness-app-7fefa.appspot.com",
	messagingSenderId: "782480765563",
	appId: "1:782480765563:web:7ae6910a6bd474a63328de",
	measurementId: "G-2J91CD93J6"
  };


  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
console.log(db)
const Data = db.collection("Data")

module.exports = Data
