import * as firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDqGB0tauxuvA2_XbISw4_v2GRansIRRAI",
  authDomain: "reduxstore-d97a1.firebaseapp.com",
  databaseURL: "https://reduxstore-d97a1.firebaseio.com",
  projectId: "reduxstore-d97a1",
  storageBucket: "reduxstore-d97a1.appspot.com",
  messagingSenderId: "492118768060"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')


