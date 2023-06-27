const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".signup header");
const loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Responsive behavior: Adjust form layout on window resize
window.addEventListener("resize", adjustFormLayout);

// Event listener for form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addData();
});

function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var getEmail = localStorage.getItem("userEmail");
  var getPwd = localStorage.getItem("userPwd");
  if (email === getEmail && password === getPwd) {
    window.location.href = 'signinwithlogout.html';
  } else {
    alert("User not found");
  }
}

function addData() {
  // Retrieve form input values
  var email2 = document.getElementById("eml").value;
  var password2 = document.getElementById("pwd").value;

  // Perform form validation
  if (!email2) {
    alert("Please enter an email address");
    return;
  }
  if (!password2) {
    alert("Please enter a password.");
    return;
  }
  // Regular expression for email validation
  var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email2)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Minimum password length requirement
  var minPasswordLength = 8;
  if (password2.length < minPasswordLength) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Save user data to local storage
  localStorage.setItem("userEmail", email2);
  localStorage.setItem("userPwd", password2);

  // Clear form input fields
  document.getElementById("eml").value = "";
  document.getElementById("pwd").value = "";

  alert("Signup successful!");
}

function adjustFormLayout() {
  const form = document.querySelector(".form");
  if (window.innerWidth < 600) {
    form.style.maxWidth = "50%";
  } else {
    form.style.maxWidth = "100%";
  }
}

function logout() {
  location.replace("homepage.html")
  history.replaceState(null,"", "homepage.html")
}