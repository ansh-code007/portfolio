// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCctqavwWbsel4HX4-VJ03I7FrgNY7Tn5U",
  authDomain: "://firebaseapp.com",
  projectId: "ansh-portfolio-50607",
  storageBucket: "ansh-portfolio-50607.firebasestorage.app",
  messagingSenderId: "373604817196",
  appId: "1:373604817196:web:c92d7bca029f10a7413689",
  measurementId: "G-RRYPJ5GLJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export app so you can use it in your other project files
export { app, analytics };
