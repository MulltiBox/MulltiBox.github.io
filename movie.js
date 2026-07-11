console.log(window.location.search);

import { db } from "./firebase.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const params = new URLSearchParams(window.location.search);

const movieId = params.get("id");

console.log("Movie ID:", movieId);

const details = document.getElementById("movie-details");


async function loadMovie(){


    const movieRef = doc(db, "movies", movieId);

    const snap = await getDoc(movieRef);


    if(snap.exists()){


        const movie = snap.data();

        console.log(movie);


        details.innerHTML = `

        <div class="details-container">


            <img src="${movie.image}" class="details-poster">


            <div class="details-info">


                <h1>
                    ${movie.title}
                </h1>


                <div class="details-meta">

                    <span>
                        ⭐ ${movie.rating || "N/A"}
                    </span>


                    <span>
                        ${movie.quality || "HD"}
                    </span>

                </div>


                <p>
                    ${movie.genre || ""}
                </p>


               <a href="player.html?id=${movieId}" class="watch-btn">
                    Watch Movie
                </a>
                

                <p>
                    ${movie.desc || "No description available"}
                </p>


                
            </div>


        </div>

        `;


    }

    else {

        details.innerHTML = `
            <h2>
            Movie not found
            </h2>
        `;

    }

}


loadMovie();
