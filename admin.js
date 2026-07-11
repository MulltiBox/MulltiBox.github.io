import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// ADD MOVIE

async function addMovie(){


    let movie = {


        title: document.getElementById("movieTitle").value,

        genre: document.getElementById("movieGenre").value,

        year: document.getElementById("movieYear").value,

        image: document.getElementById("movieImage").value,

        videoUrl: document.getElementById("videoUrl").value,

        desc: document.getElementById("movieDesc").value,

        category: document.getElementById("movieCategory").value,


        rating:"8.5",

        quality:"HD"


    };



    await addDoc(collection(db,"movies"), movie);



    alert("Movie Added Successfully");


    showMovies();


}




// SHOW MOVIES IN ADMIN

async function showMovies(){


    let list = document.getElementById("movieList");


    if(!list) return;



    list.innerHTML="";



    const snapshot = await getDocs(collection(db,"movies"));



    snapshot.forEach((doc)=>{


        let movie = doc.data();



        list.innerHTML += `


        <div class="movie-item">


        <h3>${movie.title}</h3>

        <p>${movie.category}</p>


        <button onclick="deleteMovie('${doc.id}')">

        Delete

        </button>


        </div>


        `;


    });



}



// DELETE MOVIE

async function deleteMovie(id){


    await deleteDoc(doc(db,"movies",id));


    showMovies();


}



window.addMovie = addMovie;
window.deleteMovie = deleteMovie;



showMovies();
