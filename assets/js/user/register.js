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

    const pesan = "Saya sudah register dengan username " + getValue("username") + " di MyTodoList";

    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Register Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "https://wa.me/6282317150681?text= " + pesan;
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