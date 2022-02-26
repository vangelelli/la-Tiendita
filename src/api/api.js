import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

function getProducts(category) {
    
    const itemsCollection = collection(db, "products");
    if(!category) {
    return getDocs(itemsCollection)
    } else {
     const categoryCollection = query(itemsCollection, where("category" ,"==", category))
     return getDocs(categoryCollection)
    }
}
      
// exportamos la funciones que necestio
export {
    getProducts,
}

