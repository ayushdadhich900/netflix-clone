import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDOQooABh1J1m5LJArS_Xl1CiwNKedLqzM",
    authDomain: "netflix-clone-f2810.firebaseapp.com",
    projectId: "netflix-clone-f2810",
    storageBucket: "netflix-clone-f2810.appspot.com",
    messagingSenderId: "797978100317",
    appId: "1:797978100317:web:6eda0110e156921688c3b4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { auth } ;
  export default db ;