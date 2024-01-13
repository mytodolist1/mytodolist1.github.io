import { getValue } from "https://jscroot.github.io/element/croot.js";
import { putWithToken } from "../temp/component.js";
import { format12Hours, formatDate } from "../temp/timestamp.js";

const updateTodo = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    // console.log("todoID:", _id);

    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo?_id=" + _id;

    const data = {
        title : getValue("title"),
        description : getValue("description"),
        deadline : formatDate(getValue("deadline")),
        time : format12Hours(getValue("time")),
        tags : {
            category : getValue("category"),
        }
    };

    const btnUpdate = document.getElementById('btnUpdate');
    btnUpdate.classList.add('is-loading');
    
    putWithToken(target_url, data, responseData);

    // console.log("Data:", data);
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
