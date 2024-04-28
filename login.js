// login.js
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate username and password (for demonstration purposes, using hardcoded values)
  if (username === "admin" && password === "password") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "resume.html";
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  } else {
    errorMessage.textContent = "Invalid username/password";
  }
});
