const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
};

// close when clicking outside
document.onclick = () => {
    navLinks.classList.remove("active");
};

// prevent closing when clicking inside menu
navLinks.onclick = (e) => {
    e.stopPropagation();
};
