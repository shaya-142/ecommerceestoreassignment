// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth , onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCO0jmGnCz0jDJ-N7nJx9ThVG_kxqmrWv0",
  authDomain: "ecommerce-6c655.firebaseapp.com",
  projectId: "ecommerce-6c655",
  storageBucket: "ecommerce-6c655.appspot.com",
  messagingSenderId: "596125202850",
  appId: "1:596125202850:web:a89a2e84a8b403e4e39afb",
  measurementId: "G-FWQ2N98Q90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let signupemail = document.getElementById("signupemail")
let signuppass = document.getElementById("signuppass")
let profilepic = document.getElementById("profilepic")
let createbtn = document.getElementById("createbtn")

// login


// const auth = getAuth();
// authentication function
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is log in");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
} else {
    console.log("user is not log in");
    // User is signed out
    // ...
  }
})

createbtn.addEventListener("click", ()=>{
    console.log(signupemail.value);
    console.log(signuppass.value);

    console.log("click");
    createUserWithEmailAndPassword(auth, signupemail.value, signuppass.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
    location.href = "login.html"
})
