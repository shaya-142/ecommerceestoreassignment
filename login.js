import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    query,
    where,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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
const db = getFirestore(app);

// upload cards
let uploadbtn = document.getElementById("uploadbtn");
let proname = document.getElementById("proname");
let proprice = document.getElementById("proprice");
let proreview = document.getElementById("proreview");
let prostock = document.getElementById("prostock");
let proimg = document.getElementById("proimg");
let prodesc = document.getElementById("prodesc");

uploadbtn.addEventListener("click",(e)=>{

    e.preventDefault();
    const obj = {
        name: proname.value,
        review:  +proreview.value,
        instock: +prostock.value,
        price: proprice.value,
        img: proimg.value,
        desc: prodesc.value,
        
    };
    console.log("click btn");
    console.log(obj);
    const ref = collection(db, "products");
    
    addDoc(ref, obj).then(() => console.log("product added"));
    alert("product upload")
});




// Get references to HTML elements
let loginemail = document.getElementById("loginemail");
let loginpass = document.getElementById("loginpass");
let loginbtn = document.getElementById("loginbtn");
let navlog = document.getElementById("logg");
let logoutcontainer = document.getElementById("logoutcontainer");
let useremail = document.getElementById("useremail");
let logoutbtn = document.getElementById("logoutbtn");
let log =  document.getElementById("log")
let section =  document.getElementById("section")
let uploadcontainer =  document.getElementById("uploadcontainer")

// Monitor authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in");
        const uid = user.uid;
        section.style.display = "none"
        uploadcontainer.style.display = "block" 
        logoutcontainer.style.display = "block"
        useremail.innerText = user.email
        log.innerText ="profile"
        // Additional logic for logged in user
    } else {
        section.style.display = "block"
        logoutcontainer.style.display = "none"
        uploadcontainer.style.display = "none" 
        // useremail.innerText = user.email
        // log.innerText ="profile"
        console.log("User is not logged in");
        // Additional logic for logged out user
    }
});

let loginstatus = false;
// Handle login button click event
loginbtn.addEventListener('click', () => {
    signInWithEmailAndPassword(auth, loginemail.value, loginpass.value)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User logged in");
            
            
            // location.href = "index.html"; // Redirect to homepage
            loginstatus = true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage); // Show error message
        });
});

logoutbtn.addEventListener('click',()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
});
// Export function to get login status

