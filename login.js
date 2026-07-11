console.log("LOGIN JS WORKING");

import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


async function login(){

    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        window.location.href = "admin.html";


    } catch(error){

        document.getElementById("message").innerHTML =
        "Wrong email or password";

        console.log(error.message);

    }

}


window.login = login;

document.getElementById("loginBtn").addEventListener("click", login);
