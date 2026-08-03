/*=====================================

    SHEKHAR PAL PORTFOLIO
    script.js

=====================================*/


/*=============================
    SCROLL PROGRESS BAR
=============================*/

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (scrollTop / scrollHeight) * 100;

    progress.style.width = percent + "%";

});



/*=============================
    CHANGING HERO TITLE
=============================*/

const roles = [

    "Electrical Engineer",

    "Graduate Engineer Trainee",

    "VLSI Enthusiast",

    "Problem Solver",

    "Continuous Learner"

];

const changingText =
document.getElementById("changing-text");

let index = 0;

setInterval(() => {

    index++;

    if(index >= roles.length){

        index = 0;

    }

    changingText.style.opacity = 0;

    setTimeout(() => {

        changingText.textContent =
        roles[index];

        changingText.style.opacity = 1;

    },250);

},2500);




/*=============================
    ACTIVE NAVIGATION
=============================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href") ===
"#"+current
){

link.classList.add("active");

}

});

});