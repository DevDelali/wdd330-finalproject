// Navigation bar for movie view

//Store the selected elements that we are going to use
const navbuttom = document.querySelector('#ham-btn');

const navBar = document.querySelector('#nav-bar');


// Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navBar.classList.toggle('show');
});