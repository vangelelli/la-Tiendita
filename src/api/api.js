import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';

function getProducts() {
    return new Promise((resolve, reject) => {
      
      const itemsCollection = collection(db, "products");
      getDocs(itemsCollection)
      .then(snapshot => {
          // el doc.data le pide a firestore todos los documentos de producst. El punto map es porqe importa una coleccion
          const products = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
          resolve(products)
          console.log(products)
          
       })
      .catch(error => {
          console.log(error)
          reject(error)
       })
    })
}
      
// exportamos la funciones que necestio
export {
    getProducts,
}