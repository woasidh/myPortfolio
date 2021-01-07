'use strict';

const home = document.querySelector('section#Home');
const homeC = document.querySelector('.homeContent');
const navBar = document.querySelector('nav.navbar');
const navItem = document.querySelector('ul.navbar__menu');
const contactBtn = document.querySelector('.home__contact');
const upBtn = document.querySelector('.goUp');
const prjBtn = document.querySelector('.category__container');
const works = document.querySelectorAll('.prj__img__card');
const work_cont = document.querySelector('.work__img__container');
const work_btn = document.querySelectorAll('.category__btn');
const hamburger = document.querySelector('.hamburger');

const navThresh =
    home.getBoundingClientRect().height - navBar.getBoundingClientRect().height
document.addEventListener('scroll', () => {

    if (window.scrollY > navThresh) {
        navBar.classList.add('--dark');
        upBtn.classList.add('--visible');
    } else {
        let opacity = 1 - (window.scrollY / navThresh);
        homeC.style.opacity = opacity;
        navBar.classList.remove('--dark');
        upBtn.classList.remove('--visible');
    }
})

navItem.addEventListener('click', (event) => {
    let getLink = event.target.dataset.content;
    if (getLink) {
        let scrollTo = document.querySelector(getLink);
        scrollTo.scrollIntoView({ behavior: "smooth" });
    }
    let onActive = document.querySelectorAll('.navbar__menu__items.active')
    onActive[0].classList.remove('active');
    event.target.classList.add('active');
    navItem.classList.remove('--visible');
})

contactBtn.addEventListener('click', (event) => {
    const contactSec = document.querySelector('#contact');
    contactSec.scrollIntoView({ behavior: "smooth" });
})

upBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

prjBtn.addEventListener('click', (event) => {
    let target = event.target;
    work_btn.forEach((elm) => {
        if (elm === target) {
            elm.classList.add('active');
        } else {
            elm.classList.remove('active');
        }
    })
    work_cont.classList.add('--invisible');
    setTimeout(() => {
        let filter = event.target.dataset.filter || event.target.parentElement.dataset.filter;
        if (filter == null)
            return;
        else {
            works.forEach((elm) => {
                if (filter !== 'all' && elm.dataset.kind !== filter) {
                    elm.classList.add('--invisible')
                } else {
                    elm.classList.remove('--invisible')
                }
            })
        }
        work_cont.classList.remove('--invisible');
    }, 300);

})

hamburger.addEventListener('click', () => {
    navItem.classList.toggle('--visible');
})

/* Intersection Observer */
let sectionArray = [
    '#Home',
    '#about',
    '#skill',
    '#myWork',
    '#contact'
]

const sections = document.querySelectorAll('section');
console.log(sections);

/* options */
let options = {
    threshold: 0
}

/* callback function */
let callback = (entries, observer) => {
    console.log(entries)
}
let observer = new IntersectionObserver(callback, options);

observer.observe(sections[0]);
sections.forEach(entry => {
    observer.observe(entry);
})