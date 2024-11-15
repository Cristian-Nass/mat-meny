import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

const database = getFirestore(app);
// connectFirestoreEmulator(database, "localhost", 8080);

// const functions = getFunctions(app);
// connectFunctionsEmulator(functions, "localhost", 5001);

export { database };
