import { getValue } from "https://jscroot.github.io/element/croot.js";
import { postWithToken } from "../temp/component.js";

const SendWa = () => {
    const url = "https://us-central1-mytodolist-402507.cloudfunctions.net/webhook";

    const data = {
        phonenumber: getValue("phonenumber"),
    };

    postWithToken(url, data, responseData);
}

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Send Whatsapp Successful",
            text: result.message,
        })
    } else {
        Swal.fire({
            icon: "error",
            title: "Send Whatsapp Failed",
            text: result.message,
        });
    }
}

window.SendWa = SendWa;