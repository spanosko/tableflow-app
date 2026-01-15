import { login, fetchMyVenues } from "./api.js";

const output = document.getElementById("output");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await login(email, password);
  if (error) {
    output.textContent = "LOGIN ERROR:\n" + error.message;
    return;
  }

  const { data, error: e2 } = await fetchMyVenues();
  if (e2) {
    output.textContent = "FETCH ERROR:\n" + e2.message;
    return;
  }

  output.textContent = JSON.stringify(data, null, 2);
});
