import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");


let movies = [];


async function getMovies(){

    const snapshot = await getDocs(collection(db,"movies"));

    snapshot.forEach((doc)=>{

        movies.push(doc.data());

    });

}


getMovies();



searchInput.addEventListener("input", showSuggestions);



searchBtn.addEventListener("click", function(){

    let keyword = searchInput.value.trim();

    if(keyword){

        window.location.href =
        "search.html?query=" + keyword;

    }

});



function showSuggestions(){

    let value = searchInput.value.toLowerCase();


    searchResults.innerHTML="";


    if(!value){

        searchResults.style.display = "none";
        return;

    }


    searchResults.style.display = "grid";



    let categories = [

        {
            name:"Trending",
            icon:"🔥",
            page:"trending.html"
        },

        {
            name:"Anime",
            icon:"🌸",
            page:"anime.html"
        },

        {
            name:"Movies",
            icon:"🎬",
            page:"movies.html"
        },

        {
            name:"Series",
            icon:"📺",
            page:"series.html"
        },

        {
            name:"Recommended",
            icon:"⭐",
            page:"recommended.html"
        }

    ];



    categories.forEach(category=>{


        if(category.name.toLowerCase().includes(value)){


            searchResults.innerHTML += `

            <div class="suggestion"
            onclick="location.href='${category.page}'">

            ${category.icon} ${category.name}

            </div>

            `;


        }


    });


}
