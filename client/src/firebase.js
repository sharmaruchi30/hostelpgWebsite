
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCAJWuDfCSj203wMxzxpwVgOkjYgDNtRs4",
  authDomain: "hostel-pg-website.firebaseapp.com",
  projectId: "hostel-pg-website",
  storageBucket: "hostel-pg-website.appspot.com",
  messagingSenderId: "426117680924",
  appId: "1:426117680924:web:6df4d700dde2125e5174d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)