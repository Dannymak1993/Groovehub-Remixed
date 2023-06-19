import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyDccOvuM9mXRAGHFa7xWGOyK3C9DfblY",
  authDomain: "chatgh-61b36.firebaseapp.com",
  projectId: "chatgh-61b36",
  storageBucket: "chatgh-61b36.appspot.com",
  messagingSenderId: "752740105514",
  appId: "1:752740105514:web:7cb3214bfe5ce5d0a8f253",
  measurementId: "G-CKR46XD120"
};

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  export {app, firestore};