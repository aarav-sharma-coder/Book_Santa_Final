import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAbpeTuwfV1_NLo41FC2IoPZw2Gk3NrlPI",
  authDomain: "book-santa-app-642c6.firebaseapp.com",
  databaseURL: "https://book-santa-app-642c6.firebaseio.com",
  projectId: "book-santa-app-642c6",
  storageBucket: "book-santa-app-642c6.appspot.com",
  messagingSenderId: "1079883336453",
  appId: "1:1079883336453:web:1d984369fbd0ec9950c56c"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
