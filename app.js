import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loadBtn = document.getElementById("load");
const usersList = document.getElementById("users");

loadBtn.addEventListener("click", async () => {
  usersList.innerHTML = "Loading...";

  const querySnapshot = await getDocs(collection(db, "users"));
  usersList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = JSON.stringify(doc.data());
    usersList.appendChild(li);
  });
});