import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9V3PgzUSwwTK222O2wM2CHMHKBLL93Ko",
    authDomain: "project-planner-f91f5.firebaseapp.com",
    databaseURL: "https://project-planner-f91f5.firebaseio.com",
    projectId: "project-planner-f91f5",
    storageBucket: "project-planner-f91f5.appspot.com",
    messagingSenderId: "544469027334"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;