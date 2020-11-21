import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2JLCDhxiJyXHIo9dGk3U3y-QY79p0zr0",
  authDomain: "e-commerce-9cfe3.firebaseapp.com",
  databaseURL: "https://e-commerce-9cfe3.firebaseio.com",
  projectId: "e-commerce-9cfe3",
  storageBucket: "e-commerce-9cfe3.appspot.com",
  messagingSenderId: "311432037418",
  appId: "1:311432037418:web:276658e4a7eeb38db06f53"
}

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

// export const getProducts = async () => {
//     db.collection('products').onSnapshot((querySnapshot) => {
//     const docs = [];
//     querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
//     });
//     console.log('Da lay duoc du lieu:' , docs);
//     return docs;
//     });
// };

export const getProducts = () => db.collection("products").get().then(function(querySnapshot) {
  const products = [];
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      products.push({...doc.data(), id: doc.id});      
  });
  return products;
});


