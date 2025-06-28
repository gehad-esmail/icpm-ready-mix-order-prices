// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCkwspEMvJtSbUr-tKoO2fM_t7-5GAmB0U",
  authDomain: "icpm-ready-mix-order-prices.firebaseapp.com",
  databaseURL: "https://icpm-ready-mix-order-prices-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "icpm-ready-mix-order-prices",
  storageBucket: "icpm-ready-mix-order-prices.firebasestorage.app",
  messagingSenderId: "1046935070532",
  appId: "1:1046935070532:web:7ec1fb61a22e463da69911",
  measurementId: "G-L9EP9FFS2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase Connected");
