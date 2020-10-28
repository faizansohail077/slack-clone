// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-tfWRiDIhGZSmoTqNlC_vCrwnFxD0HOQ",
    authDomain: "slack-clone-4aa35.firebaseapp.com",
    databaseURL: "https://slack-clone-4aa35.firebaseio.com",
    projectId: "slack-clone-4aa35",
    storageBucket: "slack-clone-4aa35.appspot.com",
    messagingSenderId: "597164328826",
    appId: "1:597164328826:web:614986426cf522691638c3",
    measurementId: "G-LEJWXBD87M"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;