<<<<<<< HEAD
// =============================
// Navbar beim Scrollen
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(0,0,0,.88)";
        navbar.style.boxShadow = "0 0 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.55)";
        navbar.style.boxShadow = "none";

    }

});

// =============================
// Back To Top
// =============================

const topBtn = document.createElement("div");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =============================
// Smooth Scroll Navigation
// =============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {

        const href = link.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(href);

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

});

// =============================
// Hero Logo Glow
// =============================

const logo = document.querySelector(".hero-logo");

setInterval(() => {

    logo.style.filter = "brightness(1.08)";

    setTimeout(() => {

        logo.style.filter = "brightness(1)";

    },800);

},3500);

// =============================
// Karten Animation
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll(".card,.stat").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(50px)";

    el.style.transition=".8s";

    observer.observe(el);

=======
// =============================
// Navbar beim Scrollen
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(0,0,0,.88)";
        navbar.style.boxShadow = "0 0 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.55)";
        navbar.style.boxShadow = "none";

    }

});

// =============================
// Back To Top
// =============================

const topBtn = document.createElement("div");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =============================
// Smooth Scroll Navigation
// =============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", e => {

        const href = link.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            const target = document.querySelector(href);

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

});

// =============================
// Hero Logo Glow
// =============================

const logo = document.querySelector(".hero-logo");

setInterval(() => {

    logo.style.filter = "brightness(1.08)";

    setTimeout(() => {

        logo.style.filter = "brightness(1)";

    },800);

},3500);

// =============================
// Karten Animation
// =============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll(".card,.stat").forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(50px)";

    el.style.transition=".8s";

    observer.observe(el);

>>>>>>> 8d46dd2c5fe6bf2ea258dd50ff85d6b7ee5dffe0
});