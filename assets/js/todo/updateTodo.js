import { getValue } from "https://jscroot.github.io/element/croot.js";
import { updateWithToken } from "../temp/component.js";
import { format12Hours, formatDate } from "../temp/timestamp.js";

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo?_id=" + _id;

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("title", getValue("title"));
    formData.append("description", getValue("description"));
    formData.append("deadline", formatDate(getValue("deadline")));
    formData.append("time", format12Hours(getValue("time")));
    formData.append("category", getValue("category"));
    formData.append("file", file);

    const btnUpdate = document.getElementById('btnUpdate');
    btnUpdate.classList.add('is-loading');
    
    updateWithToken(target_url, formData, responseData);
};

const responseData = (result) => {
    const btnUpdate = document.getElementById('btnUpdate');
    btnUpdate.classList.remove('is-loading');

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

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateTodo);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateTodo();
  });
