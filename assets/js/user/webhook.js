import { getValue } from "https://jscroot.github.io/element/croot.js";
import { postWithToken } from "../temp/component.js";

const SendWa = () => {
    const url = "https://us-central1-mytodolist-402507.cloudfunctions.net/webhook";

    const data = {
        username : getValue("username"),
        phonenumber : getValue("phonenumber"),
    };

    postWithToken(url, data, responseData);
}

const responseData = (result) => {
    Swal.fire({
        icon: "warning",
        title: "Sedang Mengirimkan Pesan",
        text: result.message,
    }).then(() => {
        window.location.href = "register.html";
    });
}

window.SendWa = SendWa;