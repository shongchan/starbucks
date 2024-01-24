const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const iconEl = searchEl.querySelector(".material-icons");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
  searchInputEl.style.color = "#656565";
  iconEl.style.visibility = "hidden";
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
  searchInputEl.style.color = "#fff";
  iconEl.style.visibility = "visible";
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();