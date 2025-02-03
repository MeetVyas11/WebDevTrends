import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBrpzaE21q-Ltpg0kcc6SYAzqNb_SVrsg4",
  authDomain: "webdevtrends-f404a.firebaseapp.com",
  projectId: "webdevtrends-f404a",
  storageBucket: "webdevtrends-f404a.firebasestorage.app",
  messagingSenderId: "676244246188",
  appId: "1:676244246188:web:ccec796920d12ef5d1d909",
  measurementId: "G-6JPMEP4LV6",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
// Add Task
addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (task) {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
      await addTaskToFirestore(taskText);
      renderTasks();
      taskInput.value = "";
    }
    renderTasks();
  }
});
async function addTaskToFirestore(taskText) {
  await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
  });
}
async function renderTasks() {
    var tasks = await getTasksFromFirestore();
    taskList.innerHTML = "";
   
    tasks.forEach((task, index) => {
    if(!task.data().completed){
    const taskItem = document.createElement("li");
    taskItem.id = task.id;
    taskItem.textContent = task.data().text;
    taskList.appendChild(taskItem);
    }
    });
    }
   async function getTasksFromFirestore() {
    var data = await getDocs(collection(db, "todos"));
    let userData = [];
    data.forEach((doc) => {
    userData.push(doc);
    });
    return userData;
   }
   
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
// Remove Task on Click
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
   }
   const taskText = sanitizeInput(taskInput.value.trim());

