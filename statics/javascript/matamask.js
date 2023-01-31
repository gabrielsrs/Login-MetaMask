const loginButton = document.querySelector("#loginButton")
const response = document.querySelector("#response")

function extensionCheck() {
 if (!window.ethereum) {
  loginButton.innerText = "MateMask is not installed"
  loginButton.classList.remove("normal")
  loginButton.classList.add("off")
 }
};

loginButton.addEventListener('click', loginMetaMask);

async function loginMetaMask() {
 const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
 .catch((res) => {
  response.innerText = res.message
 });

 response.innerText = accounts[0]

 if (accounts) {
  loginButton.innerText = "MateMask Already logged"
  loginButton.classList.remove("normal")
  loginButton.classList.add("off")
 }
};
 
 window.addEventListener("DOMContentLoaded", () => {
 extensionCheck()
});