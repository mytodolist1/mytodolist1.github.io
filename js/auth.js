// auth.js
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

export function checkTokenAndRedirect() {
    const token = getCookie("token");
    if (!token) {
        // Token tidak ditemukan dalam cookie, arahkan ke halaman login
        window.location.href = "login.html";
    }
}