// ************************************* navbar *********************************************
const navbarIcon = document.getElementById("bars");
const navbarBody = document.getElementById("list_item");

const song = new Audio("navbarIconImg/navClick.mp3.mp3");
navbarIcon.addEventListener("click", () => {
    navbarBody.classList.toggle("active");
    song.play();
})

// list item sound effeact with click navbar 
const clickSound = document.querySelectorAll(".clickSound");
const sound = new Audio("navbarIconImg/click.mp3.mp3");
clickSound.forEach( (clickMusice) => {
    clickMusice.addEventListener("click", () => {
        sound.play();
    })
})
// ************************************* scroll button *********************************************
const scrollTop = document.querySelector(".scrollTop");
// const scrollWindow = window.pageYOffset;

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 250){
    scrollTop.classList.add("scrollButton");
  }else{
      scrollTop.classList.remove("scrollButton");
  }
})