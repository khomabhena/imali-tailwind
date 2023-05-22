import { getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage"
import updateData from "./update-data"

const uploadFileData = async (folderPath, file, path, id, data, dUrl, name) => {
    let result = null, error = null

    const storage = getStorage()
    const storageRef = ref(storage, folderPath + "/" + file.name)

    try {
        result = await uploadBytes(storageRef, file).then((snapshot) => {
            return getDownloadURL(storageRef).then((url) => {
                updateData(path, id, {...data, [dUrl]: url, [name]: file.name})
                return url
            })
        })        
    } catch (err) {
        error = err
    }

    return { result, error }
}

export default uploadFileData