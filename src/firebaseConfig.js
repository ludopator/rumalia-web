
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA8-UyGNMclvKHgnVpCsToSyNQeF_LNBE",
  authDomain: "rumalia.firebaseapp.com",
  projectId: "rumalia",
  storageBucket: "rumalia.firebasestorage.app",
  messagingSenderId: "148721752507",
  appId: "1:148721752507:web:cc1557458e0c74eb124c9e",
  measurementId: "G-36BP6Y0HE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const yahooProvider = new OAuthProvider('yahoo.com');
export const appleProvider = new OAuthProvider('apple.com');

// Configurar los scopes de Microsoft
microsoftProvider.addScope('openid');
microsoftProvider.addScope('email');
microsoftProvider.addScope('profile');

// Configurar los scopes de Yahoo
yahooProvider.addScope('openid');
yahooProvider.addScope('email');
yahooProvider.addScope('profile');

// Configurar los scopes de Apple
appleProvider.addScope('email');
appleProvider.addScope('name');

export default app;
