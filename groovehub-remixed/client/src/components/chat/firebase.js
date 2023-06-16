import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9PmbxDlA-YXefj_D4yeNDtJRv3_5gqGg",
  authDomain: "ghchat-e136a.firebaseapp.com",
  projectId: "ghchat-e136a",
  storageBucket: "ghchat-e136a.appspot.com",
  messagingSenderId: "786998124135",
  appId: "1:786998124135:web:d43799d928706d6dd07ec2",
  measurementId: "G-Q401PTB131"
};

  const app = initializeApp(firebaseConfig);
//   const firestore = getFirestore(app)
  const firestore = getFirestore(app)


//   export {app, firestore};
  export {app, firestore};