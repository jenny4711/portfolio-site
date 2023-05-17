'use stric'
// Make navbar transparent when it is on the top
const navbar=document.querySelector('#navbar')
const navbarHeight=navbar.getBoundingClientRect().height
document.addEventListener('scroll',()=>{

  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark')
  }else{
    navbar.classList.remove('navbar--dark')
  }
})

// Handle scrolling when topping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(e)=>{
 
  const target = e.target;
  const link = target.dataset.link;
  if(link === null){
    return;
  }
  console.log(e.target.dataset.link)
  scrollIntoView(link)
})

// handle click on ' contact me' btn on home
const homeContactBtn=document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
  scrollIntoView('#contact')
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight =home.getBoundingClientRect().height
document.addEventListener('scroll',()=>{
  home.style.opacity=1-window.scrollY/homeHeight
 
})




function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior:'smooth'})
}
