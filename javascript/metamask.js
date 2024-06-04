const loginMetaMaskButton = document.querySelector(".login-metamask-button")

function extensionCheck() {
    if (!window.ethereum) {
        loginMetaMaskButton.innerText = "MateMask is not installed"
        loginMetaMaskButton.classList.add("off")
    }
};

loginMetaMaskButton.addEventListener('click', loginMetaMask);

async function loginMetaMask() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        loginMetaMaskButton.innerText = accounts[0]
        loginMetaMaskButton.classList.add("off")

    } catch (res) {
        loginMetaMaskButton.innerText = res.message;
    }
};

window.addEventListener("DOMContentLoaded", () => {
    extensionCheck()
});