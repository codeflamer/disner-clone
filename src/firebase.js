import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-NEiqRbeO83KJqfUgaNmexxtmmFYsKDk",
    authDomain: "disney-clone-3fffa.firebaseapp.com",
    projectId: "disney-clone-3fffa",
    storageBucket: "disney-clone-3fffa.appspot.com",
    messagingSenderId: "53198496260",
    appId: "1:53198496260:web:8d706c5fedebd06af50b51",
    measurementId: "G-BVK5KF5YVX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export {auth,provider,storage};
  export default db;
