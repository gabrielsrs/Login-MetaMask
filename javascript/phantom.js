const loginPhantomButton = document.querySelector(".login-phantom-button")

function getProvider() {
    if ('phantom' in window) {
        const provider = window.phantom?.solana
    
        if (provider?.isPhantom) {
          return provider
        }
    } else {
        loginMetaMaskButton.innerText = "MateMask is not installed"
        loginMetaMaskButton.classList.add("off")
    }
}

loginPhantomButton.addEventListener('click', loginPhantom);

async function loginPhantom() {
    try {
        const provider = getProvider();
        const accounts = await provider.request({ method: "connect" });
        loginPhantomButton.innerText = accounts.publicKey.toString()
        loginPhantomButton.classList.add("off")

    } catch (res) {
        loginPhantomButton.innerText = res.message;
    }
};

window.addEventListener("DOMContentLoaded", () => {
    extensionCheck()
});