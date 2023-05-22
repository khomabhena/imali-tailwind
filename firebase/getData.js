import { doc, getDoc, getFirestore } from "firebase/firestore"
import firebase_app from "./config"

const db = getFirestore(firebase_app)

const getDataFirebase = async (path, id) => {
    let result = null, error = null

    const snapshot = await getDoc(doc(db, path, id))

    if (snapshot.exists())
        result = snapshot.data()
    else
        error = "No data found"

    return { result, error }
}

export default getDataFirebase