import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

function checkTokenAndRedirect() {
    const tokens = "token";
    const tokenValue = getCookie(tokens);
    console.log("Token Value:", tokenValue);

    if (!tokenValue) {
        console.log("Token not found, redirecting to login.");
        window.location.href = "login.html";
    } else {
        console.log("Token found, redirecting to dashboard.");
        window.location.href = "index.html";
    }
}

window.onload = checkTokenAndRedirect;
