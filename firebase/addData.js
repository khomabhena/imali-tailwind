import { setDoc, doc } from "firebase/firestore"
import { db } from "./config"

const addData = async (collection, id, data) => {
    let result = null, error = null

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true
        })
    } catch(err) {
        error = err
    }

    return { result, error }
}

export default addData