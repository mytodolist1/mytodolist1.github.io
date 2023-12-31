import { getValue } from "https://jscroot.github.io/element/croot.js";
import { postRegister } from "../temp/component.js";

const Register = () => {
    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-register";
    
    const data = {
        email : getValue("email"),
        username : getValue("username"),
        password : getValue("password"),
        confirmpassword : getValue("confirmpassword"),
    };
    
    postRegister(target_url, data, responseData);
}

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Register Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "login.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Register Failed",
            text: result.message,
        });
    }
}

const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", Register);