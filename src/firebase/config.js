import * as firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeKj4_AIkCSm1mR6adll1-TC7J7D7XUig",
  authDomain: "fb-image-upload-ae16c.firebaseapp.com",
  databaseURL: "gs://fb-image-upload-ae16c.appspot.com",
  projectId: "fb-image-upload-ae16c",
  storageBucket: "fb-image-upload-ae16c.appspot.com",
  messagingSenderId: "448062026235",
  appId: "1:448062026235:web:e8e7eb46fbd9be8dcc9b5e",
  measurementId: "G-TP4PB5J0C2"
};

  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
