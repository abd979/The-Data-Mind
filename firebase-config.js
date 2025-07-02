// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp-Y_UQUw7vMSuKcZT0VlnRl_2PBB_bF0",
    authDomain: "abdullah-91c63.firebaseapp.com",
    projectId: "abdullah-91c63",
    storageBucket: "abdullah-91c63.firebasestorage.app",
    messagingSenderId: "763190164269",
    appId: "1:763190164269:web:52556b8023de0c98bc71a4",
    measurementId: "G-T4N4YXPE0C"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence()
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
        } else if (err.code == 'unimplemented') {
            console.log('The current browser does not support persistence.');
        }
    }); 