/* ====== Show Menu ======= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
/* ====== Menu Show ======= */
/* Valida si la constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* ====== Menu Hidden ======= */
/* Valida si la constante existe */
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}
/* ====== Remove Menu Mobile ======= */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


  /* ====== Change Background Header ======= */
  function scrollHeader(){
    const header = document.getElementById('header')
      //Cuando el scroll es mayor de 50 vieport de altura, añade la clase scroll header a la etiqueta de header
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header');
  }
  window.addEventListener('scroll', scrollHeader)

/* ====== scroll sections ative link ======= */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ====== show scroll up ======= */
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  //Cuando el Scroll es mayor a 460 del alto del vieport, añade la clase show-scroll a la etiueta con el scroll-tag
  if(this.scrollY >= 460)scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/* ====== scroll reveal animation ======= */
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  /* reset:true */
})
sr.reveal('.home-swiper, .new-swiper')
sr.reveal('.new_content,.trick_content', {interval:100})
sr.reveal('.about_data', {origin:'left'})
sr.reveal('.about_img', {origin:'right'})