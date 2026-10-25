"use strict";

const loginForm = document.querySelector("#login-form");
const loginView = document.querySelector("#login-view");
const accountView = document.querySelector("#account-view");
const accountName = document.querySelector("#account-name");
const signOutButton = document.querySelector("#sign-out");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = new FormData(loginForm).get("email");
  const name = email.toString().split("@")[0] || "there";

  accountName.textContent = name;
  loginView.hidden = true;
  accountView.hidden = false;
  signOutButton.focus();
});

signOutButton.addEventListener("click", () => {
  accountView.hidden = true;
  loginView.hidden = false;
  loginForm.reset();
  document.querySelector("#email").focus();
});
