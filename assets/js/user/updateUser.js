import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putData } from "../temp/component.js";

const updateUser = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateUser?_id=" + _id;

    const data = {
        username : getValue("username"),
        password : getValue("password"),
    };
    
    putData(target_url, data, responseData);
};

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "profile.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: result.message,
        });
    }
}

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateUser);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateUser();
  });
