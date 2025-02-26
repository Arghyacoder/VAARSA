// function toggleBurger() {
//     document.querySelector('.burger').classList.toggle('active');
//     // document.querySelector('.nav_links').classList.toggle('expanded');
// }

// const burger = document.querySelector('.burger');
// const navbar = document.querySelector('.navbar');
// const navlist = document.querySelector('.lower_navbar');
    
// document.querySelector('.burger').addEventListener('click', function() {
//     document.querySelector('.lower_navbar').classList.toggle('expanded');
//     document.querySelector('.navbar').classList.toggle('expandedlist');
// });

function toggleBurger() {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.lower_navbar').classList.toggle('expanded');
}

document.querySelector('.burger').addEventListener('click', toggleBurger);