import {getFirestore} from "firebase/firestore"
import { app } from "./firebase"

export const FireStoreDB = getFirestore(app) 