import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBK0nDESAQjqeDdFydFiBSpCaMRsJevT3k",
  authDomain: "shahin-tourism.firebaseapp.com",
  projectId: "shahin-tourism",
  storageBucket: "shahin-tourism.appspot.com",
  messagingSenderId: "350722574935",
  appId: "1:350722574935:web:97765c058b608ce7267112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;