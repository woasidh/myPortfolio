'use strict';

const home = document.querySelector('section#Home');
const navBar = document.querySelector('nav.navbar');
const navItem = document.querySelector('ul.navbar__menu');

const navThresh = 
home.getBoundingClientRect().height - navBar.getBoundingClientRect().height
document.addEventListener('scroll', ()=>{
    if(window.scrollY>navThresh){
        navBar.classList.add('--dark');
    }else{
        navBar.classList.remove('--dark');
    }
})

navItem.addEventListener('click', ()=>{
    console.log(navItem);
})