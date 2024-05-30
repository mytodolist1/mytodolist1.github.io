import { getValue } from "https://jscroot.github.io/element/croot.js";
import { postRegister } from "../temp/component.js";

const Register = () => {
    // const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-register";
    const target_url = "https://vercel-go-sandy.vercel.app/register";

    const data = {
        email : getValue("email"),
        phonenumber : getValue("phonenumber"),
        username : getValue("username"),
        password : getValue("password"),
        confirmpassword : getValue("confirmpassword"),
    };

    const btnRegister = document.getElementById('btnRegister');
    btnRegister.classList.add('is-loading');
    
    postRegister(target_url, data, responseData);
}

const responseData = (result) => {

    const btnRegister = document.getElementById('btnRegister');
    btnRegister.classList.remove('is-loading');

    if (result.status === 201) {

        Swal.fire({
            icon: "success",
            title: "Send to Whatsapp",
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