import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDDlYLqc-FAqtKcy3C_uVL7KS_2YielqIY",
    authDomain: "labnotes-1fda5.firebaseapp.com",
    projectId: "labnotes-1fda5",
    storageBucket: "labnotes-1fda5.appspot.com",
    messagingSenderId: "14766256417",
    appId: "1:14766256417:web:ee27e0abca464530420e60",
    measurementId: "G-NYKFH26FN4"
};

const fireBase= firebase.initializeApp(firebaseConfig);
export const db = fireBase.firestore();
 const auth= firebase.auth();



export const getNotes = db.collection('mynotes').get();
export const deleteNotes = (id) => {
  return db.collection('mynotes').doc(id).delete();
  }
 
  export { auth };