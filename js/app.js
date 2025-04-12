const titleElement = document.querySelector(".title");
const originalWords = titleElement.textContent.split(" ");
const copyright = document.querySelector('.copyright')
const currentYear = new Date().getFullYear()

copyright.textContent = `© ${currentYear}, Copyright.`


function updateTitleLayout() {
  const screenWidth = window.innerWidth;
  const splitIndex = screenWidth > 800 ? 2 : 0;

  if (splitIndex === 0 || originalWords.length <= splitIndex) {
    titleElement.innerHTML = originalWords.join(" ");
  } else {
    const firstLine = originalWords.slice(0, splitIndex).join(" ");
    const secondLine = originalWords.slice(splitIndex).join(" ");
    titleElement.innerHTML = `${firstLine}<br>${secondLine}`;
  }
}

function setupBurgerToggle() {
  const toggleButton = document.getElementById("menu-toggle");
  const navContainer = document.querySelector(".nav__container");
  const navLi = document.querySelectorAll(".nav__li");
  if (!toggleButton || !navLi) return;
  navLi.forEach((item) => {
    item.addEventListener("click", () => {
      navContainer.classList.remove("active");
    });
  });

  toggleButton.addEventListener("click", function () {
    this.classList.toggle("open");
    navContainer.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateTitleLayout();
  setupBurgerToggle();
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const navContainer = document.querySelector(".nav__container");

  if (scrollY >= 200) {
    navContainer.classList.add("scrolled");
  } else {
    navContainer.classList.remove("scrolled");
  }
});

window.addEventListener("resize", updateTitleLayout);
