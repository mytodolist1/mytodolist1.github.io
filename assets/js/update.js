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
            window.location.href = "list_kegiatan.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: result.message,
        });
    }
}

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    console.log("todoID:", _id);

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-updateTodo?_id=" + _id;

    const data = {
        "title": getValue("title"),
        "description": getValue("description"),
        "deadline": getValue("deadline"),
    };
    
    putData(target_url, data, responseData);

    console.log("Data:", data);
};

// window.updateTodo = updateTodo;

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateTodo);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateTodo(); // Call pushData function when the button is clicked
  });
