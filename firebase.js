import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAbdhAs3vNBokzFmGzPzJ3-KoBAyhJCPY",
  authDomain: "taka-income-bot-64005.firebaseapp.com",
  projectId: "taka-income-bot-64005",
  storageBucket: "taka-income-bot-64005.firebasestorage.app",
  messagingSenderId: "32062155253",
  appId: "1:32062155253:web:853e5e62a25a332aff18bc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);