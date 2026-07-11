import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDk16TuLrKEYh_SjImYvd99pujHR00zDZ8",
    authDomain: "mulltibox.firebaseapp.com",
    projectId: "mulltibox",
    storageBucket: "mulltibox.firebasestorage.app",
    messagingSenderId: "197181870596",
    appId: "1:197181870596:web:c65ecfa9853ee4849f5b51",
    measurementId: "G-YG4W8ZNM4J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

const title = document.getElementById("movieTitle");
const video = document.getElementById("videoPlayer");
const description = document.getElementById("movieDescription");

async function loadMovie() {

    try {

        const movieRef = doc(db, "movies", movieId);
        const snap = await getDoc(movieRef);

        if (snap.exists()) {

            const movie = snap.data();

            title.textContent = movie.title;
            description.textContent = movie.description || "No description available.";
            video.src = movie.videoUrl;

        } else {

            title.textContent = "Movie not found.";

        }

    } catch (error) {

        console.error(error);
        title.textContent = "Error loading movie.";

    }

}

loadMovie();
