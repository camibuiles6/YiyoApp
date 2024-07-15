import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

import { getAuth, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAqQjjuFXnJqoVOzWR-lZ9xMwRV_kQxpLs",
    authDomain: "loginyiyoapp.firebaseapp.com",
    projectId: "loginyiyoapp",
    storageBucket: "loginyiyoapp.appspot.com",
    messagingSenderId: "665877683932",
    appId: "1:665877683932:web:f04bdbd5681f90c5b51e19",
    measurementId: "G-RWFTD1D8ED"
  };

  const app = initializeApp(firebaseConfig);

  let avatar=document.getElementById("avatar")
  let botonSalida=document.getElementById("botonsalir")

  const auth= getAuth()
  onAuthStateChanged(auth,(user)=>{
    avatar.classList.remove("invisible")
    avatar.textContent=user.email
  })

  botonSalida.addEventListener("click",function(){
    
    signOut(auth).then(()=>{
        avatar.classList.add("invisible")
        window.location.href=("./views/login.html")
    })
  })