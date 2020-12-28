import firebase from 'firebase'

const firebaseConfig={
  apiKey: "AIzaSyCcHPc56UnKJFWcANaszvUjP3IBddqubEM",
  authDomain: "fb-mern-45134.firebaseapp.com",
  databaseURL: "https://fb-mern-45134-default-rtdb.firebaseio.com",
  projectId: "fb-mern-45134",
  storageBucket: "fb-mern-45134.appspot.com",
  messagingSenderId: "138780324521",
  appId: "1:138780324521:web:4cef5acb2094f0901f6fb8"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const provider=new firebase.auth.EmailAuthProvider()
const db =firebase.firestore()
const provider1=new firebase.auth.GoogleAuthProvider()
export{auth,provider,provider1}
export  default db;