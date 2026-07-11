import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const searchContainer = document.getElementById("search-container");
const searchTitle = document.getElementById("search-title");


let query = new URLSearchParams(window.location.search).get("query");


if(query){

    searchTitle.innerHTML = `Search Results For: ${query}`;

}



function createCard(movie, id){

    return `

    <div class="card">

        <img src="${movie.image}" alt="${movie.title}">


        <div class="card-info">


            <div class="movie-top">

                <span class="rating">
                    ⭐ ${movie.rating || "N/A"}
                </span>

                <span class="quality">
                    ${movie.quality || "HD"}
                </span>

            </div>


            <h3>${movie.title}</h3>


            <p>${movie.genre}</p>


            <a href="movie.html?id=${id}" class="watch-btn">
             Watch Now
            </a>


        </div>


    </div>

    `;

}




async function searchMovies(){


    const snapshot = await getDocs(collection(db,"movies"));


    let found = false;



    snapshot.forEach((doc)=>{


        let movie = doc.data();
        movie.id = doc.id;


        if(
            movie.title.toLowerCase()
            .includes(query.toLowerCase())
        ){


            searchContainer.innerHTML += createCard(movie, movie.id);


            found = true;


        }


    });



    if(!found){

        searchContainer.innerHTML = `

        <h2>
        No results found for "${query}"
        </h2>

        `;

    }


}



if(query){

    searchMovies();

}
