// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX8yWM15_TguZrh7orPLxszKGcbiyKTds",
  authDomain: "login-form-b804e.firebaseapp.com",
  projectId: "login-form-b804e",
  storageBucket: "login-form-b804e.appspot.com",
  messagingSenderId: "1096362077682",
  appId: "1:1096362077682:web:9da3fa8daceb735a6d8f6b"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};