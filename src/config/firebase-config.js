import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAECA70-2ckL4XnoLIFFeN_6JDOuE8zSG0",
    authDomain: "cv-creator-2.firebaseapp.com",
    databaseURL: "https://cv-creator-2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cv-creator-2",
    storageBucket: "cv-creator-2.appspot.com",
    messagingSenderId: "19979934802",
    appId: "1:19979934802:web:01754f592a13f4a0cc538b",
    measurementId: "G-2JX3QDFYT5"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase