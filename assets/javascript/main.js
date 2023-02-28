const btnSombre = document.querySelector("#btnSombre");
const btnClaire = document.querySelector("#btnClaire");
const styleNavbar = document.querySelector(".navbar");

let theme;

if (!localStorage.getItem("actual_theme")) {
  theme = localStorage.setItem("actual_theme", "black");
} else {
  theme = localStorage.getItem("actual_theme");
}


if (theme === "white") {
  body.style.backgroundColor = "#c8d7c6";
  styleNavbar.style.backgroundColor = "#182d0e";
}

btnClaire.addEventListener("click", () => {
  localStorage.setItem("actual_theme", "white");
  body.style.backgroundColor = "#c8d7c6";
  styleNavbar.style.backgroundColor = "#182d0e";
});

btnSombre.addEventListener("click", () => {
  localStorage.setItem("actual_theme", "black");
  body.style.backgroundColor = "#182d0e";
  styleNavbar.style.backgroundColor = "#000000";
});
