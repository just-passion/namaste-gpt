// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU1dObw64_ZdnwEl3yLPamn5Z0OvlU658",
  authDomain: "netflixgpt-9bebd.firebaseapp.com",
  projectId: "netflixgpt-9bebd",
  storageBucket: "netflixgpt-9bebd.appspot.com",
  messagingSenderId: "716978062564",
  appId: "1:716978062564:web:8fa12e0a7970a2cac798f1",
  measurementId: "G-H3DPL4GDTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();