
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider} from 'firebase/auth';
import { getFirestore,collection,doc,setDoc  } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey, 
  authDomain: process.env.REACT_APP_authDomain, 
  projectId: process.env.REACT_APP_projectId, 
  storageBucket: process.env.REACT_APP_storageBucket, 
  messagingSenderId: process.env.REACT_APP_messagingSenderId, 
  appId: process.env.REACT_APP_appId, 
};

initializeApp(firebaseConfig)
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore()

export {

        setDoc,
        googleAuthProvider,
        collection,
        db,
        doc

}