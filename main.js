"use stric";
// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarMenu = document.querySelector(".navbar__menu");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  navbarMenu.classList.remove("open");
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// navbar toggle btn for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle scrolling when topping on the navbar menu

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }

  scrollIntoView(link);
});

// handle click on ' contact me' btn on home
// const homeContactBtn = document.querySelector(".home__contact");
// homeContactBtn.addEventListener("click", () => {
//   scrollIntoView("#contact");
// });

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
// Show 'arrow up' btn when scrolling down
document.addEventListener("scroll", () => {
  const arrowUp = document.querySelector(".arrow-up");
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// handle click on the 'arrow up' btn
const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// filter projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }
  //  remove selection from the prvious item
  const active = document.querySelector(".category__btn.selected");
  console.log(active, "active");

  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  console.log(e.target.classList, "class");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
