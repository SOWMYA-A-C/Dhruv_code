import firebase from 'firebase'
require("@firebase/firestore")
  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDZkijU7D_B19ZR9VKYsKnZXABF0iRa1kU",
  //   authDomain: "book-santa-app-fe8d4.firebaseapp.com",
  //   databaseURL: "https://book-santa-app-fe8d4.firebaseio.com",
  //   projectId: "book-santa-app-fe8d4",
  //   storageBucket: "book-santa-app-fe8d4.appspot.com",
  //   messagingSenderId: "493227246739",
  //   appId: "1:493227246739:web:6259cdf185cad52e973966"
  // };

  var firebaseConfig = {
    apiKey: "AIzaSyApb8JuFMUZOPlCn68P5lN1EcfKCkrfrcQ",
    authDomain: "book-santa-24b65.firebaseapp.com",
    databaseURL: "https://book-santa-24b65.firebaseio.com",
    projectId: "book-santa-24b65",
    storageBucket: "book-santa-24b65.appspot.com",
    messagingSenderId: "94216205151",
    appId: "1:94216205151:web:6ec99dc286b8cacd52bcea"
  };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()