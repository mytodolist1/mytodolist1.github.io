import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

function Register(){
    let target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-register";
    let token = "token";

    let data = {
        "email": getValue("email"),
        "username": getValue("username"),
        "password": getValue("password"),
    };
    postWithBearer(target_url, token, data, responseData);
}

function responseData(result) {
    alert(result.message);
    window.location.href = "login.html";
}

document.getElementById("button1").addEventListener("click", Register);