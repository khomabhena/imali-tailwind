import { doc, getFirestore, setDoc } from "firebase/firestore"
import firebase_app from "./config"

const db = getFirestore(firebase_app)
const setDataFirebase = async (path, id, data) => {
    let result = null, error = null

    try {
        result = await setDoc(doc(db, path, id), data)
    } catch (err) {
        error = err
    }

    return { result, error }
}

export default setDataFirebase