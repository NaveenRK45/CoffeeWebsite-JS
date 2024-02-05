let navbar = document.querySelector('.navbar');

 document.querySelector('#menu-btn').onclick = ()=>{
     navbar.classList.toggle('active');
     searchbar.classList.remove('active');
     cartItem.classList.remove('active');
 }

 let searchbar = document.querySelector('.search-form');

 document.querySelector('#search-btn').onclick = ()=>{
    searchbar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
 }
 
 let cartItem = document.querySelector('.carts-items-container');

 document.querySelector('#cart-btn').onclick = ()=>{
    cartItem.classList.toggle('active');
    searchbar.classList.remove('active');
    navbar.classList.remove('active');
 }

 window.onscroll =()=>{
    navbar.classList.remove('active');
    searchbar.classList.remove('active');
    cartItem.classList.remove('active');
 }