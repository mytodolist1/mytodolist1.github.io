import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";
// import { setInner } from "https://jscroot.github.io/element/croot.js";

function logout() {
    var result = confirm("Are you sure you want to logout?");
    if (result) {
        deleteCookie("token");
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        const currentPath = window.location.pathname.split("/").pop();

        if (currentPath === "index.html") {
            window.location.href = "login.html";
        } else {
            window.location.href = "login.html";
        }
    }
}

document.getElementById("logoutButton").addEventListener("click", logout);