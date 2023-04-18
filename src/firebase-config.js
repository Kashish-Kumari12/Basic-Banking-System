
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database"
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyAOkJ1oD8Hq3gy9K2xbkn1Wb-GXC-mzHak",
  authDomain: "sparkfoundationbank.firebaseapp.com",
  projectId: "sparkfoundationbank",
  storageBucket: "sparkfoundationbank.appspot.com",
  messagingSenderId: "1005376403458",
  appId: "1:1005376403458:web:fc56d109f3dedeb26f4f1b",
  measurementId: "G-D340S6F3TY"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const realtimeDatabase = getDatabase(app); 
// export default realtimeDB = app.database().ref();