const navbar = document.querySelector(".navbar");

const menubtn = document.querySelector(".menu-btn");
const navmenu = document.querySelector(".navbar .menu");
const upBtn = document.querySelector(".scroll-up-btn");
const closeBtn = document.querySelector(".menu-btn i");
const showYear = document.querySelector(".date");

let newYear = new Date();
showYear.textContent = newYear.getFullYear();

upBtn.addEventListener("click", function () {
  scrollTo(10, 10);
});

document.addEventListener("scroll", function () {
  if (scrollY > 30) {
    navbar.classList.add("sticky");
    upBtn.classList.add("show");
  } else {
    navbar.classList.remove("sticky");
    upBtn.classList.remove("show");
  }
});

let val = 0;
menubtn.addEventListener("click", function () {
  navmenu.classList.toggle("active");

  val++;
  if (val % 2 != 0) {
    closeBtn.removeAttribute("class");
    closeBtn.setAttribute("class", " fas fa-times");
  } else {
    closeBtn.setAttribute("class", "fas fa-bars");
  }
});

const menuList = document.querySelectorAll(".menu li a");

menuList.forEach((item) => {
  item.addEventListener("click", function () {
    navmenu.classList.remove("active");
    closeBtn.setAttribute("class", "fas fa-bars");
  });
});
