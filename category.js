import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


console.log("Category system loaded");


// Get category from page
let category = document.body.getAttribute("data-category");


// Container
let container = document.getElementById("category-container");



async function loadCategory(){


    const snapshot = await getDocs(collection(db,"movies"));



    snapshot.forEach((doc)=>{


        let movie = doc.data();

        movie.id = doc.id;



        if(movie.category === category){


            container.innerHTML += `

            <div class="card">

                <img src="${movie.image}" alt="${movie.title}">


                <div class="card-info">


                    <h3>${movie.title}</h3>


                    <p>${movie.genre}</p>


                    <a href="movie.html?id=${movie.id}" class="watch-btn">
                        Watch Now
                    </a>


                </div>


            </div>

            `;


        }


    });


}



loadCategory();
