import { doc, getFirestore, updateDoc } from "firebase/firestore"
import firebase_app from "./config"

const db = getFirestore(firebase_app)

export default async function updateData(path, id, data) {
    let result = null, error = null

    try {
        result = await updateDoc(doc(db, path, id), data)
    } catch (err) {
        error = err
    }

    return { result, error }
}