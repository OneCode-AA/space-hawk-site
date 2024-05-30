const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn-icon");

// to save the dark mode by using the object "local storage".

// function to store the value true if the dark mode is activated or false if not

function store(value) {
  localStorage.setItem("dark-mode", value);
}

// function that indicates if the 'dark-mode' property exists. it loads the page as it was left

function load() {
  const darkMode = localStorage.getItem("dark-mode");

  // if the dark-mode was never activated

  if (!darkMode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (darkMode == "true") {
    // if the dark mode is activated
    body.classList.add("dark-mode");
    icon.classList.add("fa-sun");
  } else if (darkMode == "false") {
    // if the dark-mode exist but is disabled
    icon.classList.add("fa-sun");
  }
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  icon.classList.add("animated");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    dots.style.backgroundColor = "#000";
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});
