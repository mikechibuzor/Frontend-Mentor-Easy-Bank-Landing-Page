console.log("connected");

// the line of code directly below selects hamburger icons
const menuOpenClose = document.querySelector(".hamburger").children;

const nav = document.querySelector("ul.up");

// function that handles everything on the responsive nav/menu
const toggleNav = (event) => {
  const whichButtonClicked = event.currentTarget.classList.contains("close")
    ? "previousElementSibling"
    : "nextElementSibling";
  event.currentTarget.classList.toggle("hidden");
  event.currentTarget[whichButtonClicked].classList.toggle("hidden");

  nav.classList.toggle("resp-nav-animation");
};

// binding to event click event listener
Array.from(menuOpenClose).forEach((btn) => {
  btn.addEventListener("click", toggleNav);
});
