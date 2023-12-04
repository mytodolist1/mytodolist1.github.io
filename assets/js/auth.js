import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
    const token = "Authorization";
    const tokenValue = getCookie(token);
    // console.log("Token Value:", tokenValue);

    if (!tokenValue) {
        // console.log("Token not found, redirecting to login.");
        window.location.href = "login.html";
    }
}

window.onload = checkTokenAndRedirect;
