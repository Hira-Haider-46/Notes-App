import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "notes-app-f3d21.firebaseapp.com",
  projectId: "notes-app-f3d21",
  storageBucket: "notes-app-f3d21.appspot.com",
  messagingSenderId: "731301027514",
  appId: "1:731301027514:web:300d0f24f3bfc94b59ec83",
  measurementId: "G-KEKHQL627M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes")