import { collection, doc, getFirestore } from 'firebase/firestore'
import firebase_app from "./config"

const db = getFirestore(firebase_app)

const getUniqueId = (path) => {
    const docRef = doc(collection(db, path))

    return docRef.id
}

export default getUniqueId