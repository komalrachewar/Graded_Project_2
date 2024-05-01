const loginForm = document.querySelector(".submitBtn");
const errorMessage = document.getElementById("errorMessage");
loginForm.addEventListener("click", submitForm);
localStorage.setItem("userName", "admin");
localStorage.setItem("password", "admin");
function submitForm(e) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.querySelector("#errorMessage");
  if (username === localStorage.getItem("userName") && password === localStorage.getItem("password")) {
    window.location = "resume.html";
  } else {
    error.innerText = "Username or password is invalid, please check.";
  }
}

