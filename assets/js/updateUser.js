import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const putData = (target_url, data, responseFunction) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const responseData = (result) => {
    console.log("Server Response:", result, result.status);
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

const updateUser = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    console.log("todoID:", _id);

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateUser?_id=" + _id;

    const data = {
        "username": getValue("username"),
        "email": getValue("email"),
    };
    
    putData(target_url, data, responseData);

    console.log("Data:", data);
};

// window.updateUser = updateUser;

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateUser);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateUser(); // Call pushData function when the button is clicked
  });
