// References
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");
const resetBox = document.getElementById("resetBox");

// LOGIN form handler
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login Submitted!");
});

// SIGNUP form handler
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Account Created Successfully!");
});

// RESET PASSWORD form handler
document.getElementById("resetForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Password reset link sent to your email!");
});

// Switch: Login → Signup
document.getElementById("showSignup").addEventListener("click", function(e) {
  e.preventDefault();
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
  resetBox.classList.add("hidden");
});

// Switch: Signup → Login
document.getElementById("showLogin").addEventListener("click", function(e) {
  e.preventDefault();
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
  resetBox.classList.add("hidden");
});

// Switch: Reset → Login
document.getElementById("backToLogin").addEventListener("click", function(e) {
  e.preventDefault();
  resetBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

document.querySelector(".google-btn").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "https://accounts.google.com/signin";
});

document.querySelector(".github-btn").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "https://github.com/login";
});

// Switch: Forget Password → Reset
document.querySelector("#loginBox .options a").addEventListener("click", function(e) {
  e.preventDefault();
  loginBox.classList.add("hidden");
  signupBox.classList.add("hidden");
  resetBox.classList.remove("hidden");
});
