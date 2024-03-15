import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
    const userToken = "Authorization";
    const adminToken = "Authorizationadmin";
    
    const userTokenValue = getCookie(userToken);
    const adminTokenValue = getCookie(adminToken);

    if (!adminTokenValue && !userTokenValue) {
        window.location.href = "../login.html";
    }
}

window.onload = checkTokenAndRedirect;
