import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALFL6Oz3ALsflxov4ZKrlqAbaJlaMW40Q",
  authDomain: "groovehub-remixed.firebaseapp.com",
  databaseURL: "https://groovehub-remixed-default-rtdb.firebaseio.com",
  projectId: "groovehub-remixed",
  storageBucket: "groovehub-remixed.appspot.com",
  messagingSenderId: "1088273854519",
  appId: "1:1088273854519:web:1d911dc3e64579679f4fb2",
  measurementId: "G-HYWEFBF40S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

export { database, auth };
export default firebase;
