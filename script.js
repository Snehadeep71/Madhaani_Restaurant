/*-------------------------------Javascript for the navigation buttons------------------------------------*/ 
function loadMenuPage(event){
    
    window.location.href="menu.html";
}
const loadItemPage=(e)=>{
    window.location.href="items.html";
}
const loadGalleryPage=(e)=>{
    window.location.href="gallery.html";
}
const loadAboutPage=(e)=>{
    window.location.href="about.html";
}
/*-------------------------------Javascript for the home page slide------------------------------------*/ 
let counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>3){
        counter=1;
    }
},7000);
/*------------------progress bar js starts here ---------------------*/
document.addEventListener("DOMContentLoaded", function() {
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let scrollTop = document.documentElement.scrollTop; // Get the scroll position
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Calculate the total scrollable height
        let topPosition = scrollTop / scrollHeight; // Calculate the position from the top
        let scrollValue = Math.round(topPosition * 100); // Calculate the scroll progress percentage

        if (scrollTop > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }

        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
});
/*------------------progress bar js ends here ---------------------*/
/* --------------------------Javascript for the Gallery tab starts here ---------------------------------------------*/

let next=document. querySelector('.next');
let prev=document. querySelector('.prev');       
next.addEventListener('click',function(e){
    let item= document.querySelectorAll('.item');
    document.querySelector('.slide1').appendChild(item[0]);
})
prev.addEventListener('click',function(){
    let item= document.querySelectorAll('.item');
    document.querySelector('.slide1').prepend(item[item.length-1]);
});
document.getElementById('progress').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/*-------------special item js---------------------------*/ 
function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('myModal').style.display = "flex";
    document.body.classList.add("modal-open"); // Add modal-open class to body
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.body.classList.remove("modal-open"); // Remove modal-open class from body
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Remove modal-open class from body
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before accessing elements
    var element = document.getElementById('exampleElement');
    if (element !== null) {
        // Access properties or call methods on the element
        element.addEventListener('click', function() {
            // Do something when the element is clicked
        });
    } else {
        console.error('Element not found');
    }
});

/*-------------special item js---------------------------*/ 
/* --------------------------Javascript for the Gallery tab ends here ---------------------------------------------*/
// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })
//-------------------indicators js--------------------------
// document.addEventListener("DOMContentLoaded", () => {
//     const spyLinks = document.querySelectorAll(".spy-link");

//     spyLinks.forEach(link => {
//         link.addEventListener("click", event => {
//             event.preventDefault(); // Prevent default behavior

//             const targetId = link.getAttribute("href"); // Get the section ID
//             const targetSection = document.querySelector(targetId);

//             if (targetSection) {
//                 const topOffset = targetSection.offsetTop; // Get the vertical position

//                 // Scroll with smooth behavior
//                 window.scrollTo({
//                     top: topOffset,
//                     behavior: "smooth", // Smooth scrolling
//                 });
//             }
//         });
//     });
// });
/*-----------------------------------hamburger menu javascript-----------------------------------*/


