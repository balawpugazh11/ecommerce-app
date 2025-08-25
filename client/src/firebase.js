// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjEDtwlciL9o9dk26suMr_2bgASiVC0gs",
  authDomain: "ecommerce-balaw.firebaseapp.com",
  projectId: "ecommerce-balaw",
  storageBucket: "ecommerce-balaw.firebasestorage.app",
  messagingSenderId: "319340991757",
  appId: "1:319340991757:web:c5303ebe0be5c84ddd4c44",
  measurementId: "G-BFJDE72SGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);

try {
  analytics = getAnalytics(app);
} catch (_) {
  // Analytics may not be available in some environments (e.g., SSR/build)
}
const auth = getAuth(app);

export { auth };