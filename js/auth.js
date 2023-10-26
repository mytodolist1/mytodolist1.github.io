// auth.js
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

function checkTokenAndRedirect() {
    const tokens = "token";
    if (!getCookie(tokens)) {
        // Token tidak ditemukan dalam cookie, arahkan ke halaman login
        window.location.href = "login.html";
    } else {
        // Token ditemukan dalam cookie, arahkan ke halaman dashboard
        window.location.href = "index.html";
    }
}

window.onload = checkTokenAndRedirect;