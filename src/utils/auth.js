import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';

let userData;
const firebaseConfig = {
  apiKey: "AIzaSyCTXSHNg6E6lv4v4lC3xk4ANZRTW_Ea5tQ",
  authDomain: "diplome-4a8f3.firebaseapp.com",
  projectId: "diplome-4a8f3",
  storageBucket: "diplome-4a8f3.appspot.com",
  messagingSenderId: "879383651186",
  appId: "1:879383651186:web:2e4322fdefd6cf50aef3eb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

 document.addEventListener("DOMContentLoaded", () => {
    // Отримуємо посилання на елементи авторизації
  const loginButton = document.querySelector("#login_button");
  const logoutButton = document.querySelector("#logout_button");
  const userIcon = document.querySelector("#user_icon");

  // Отримуємо стан авторизації користувача та перевірка на наявність даних в Local storage при завантажені сторінки
  auth.onAuthStateChanged((user) => {
    if(user){
      const savedUserData = localStorage.getItem("user")
      if(savedUserData){
        userData = JSON.parse(savedUserData)
      }
      loginButton.style.display = "none";
      logoutButton.style.display = "block";
      userIcon.style.display = "block";
      userIcon.src = userData.photoURL;
    } else {
      loginButton.style.display = "block";
      logoutButton.style.display = "none";
      userIcon.style.display = "none";
    }
  })


  
    // Подія кліку по кнопці вхід
  loginButton.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    console.log("Click login btn", provider);
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log("Loged in:", user.displayName);
      localStorage.setItem("user", JSON.stringify(user));
    }).catch((error) => {
      const errorMessage = error.message;
      console.error("Login Error:", errorMessage);
    })
    });

    // Подія кліку по кнопці вихід
    logoutButton.addEventListener('click', ()=> {
      signOut(auth).then(()=> {
      console.log("Logged out:");
      localStorage.removeItem("user")
      }).catch((error) => {
        const errorMessage = error.message;
        console.error("Logout Error:", errorMessage);
      })
    })
  });

    
