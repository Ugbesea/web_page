const  button = document.querySelector(".hb")
const navLinks = document.querySelector(".links")
console.log(button, navLinks)

button.addEventListener("click",function(){
    navLinks.classList.toggle("open-nav")
    console.log('func ran')
})