import { getValue } from "https://jscroot.github.io/element/croot.js";
import { format12Hours, formatDate } from "../temp/timestamp.js";
import { postWithToken } from "../temp/component.js";

const insertTodo = () => {
    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";

    const data = {
        title : getValue("title"),
        description : getValue("description"),
        deadline : formatDate(getValue("deadline")),
        time : format12Hours(getValue("time")),
        tags : {
            category : getValue("category"),
        }
    };

    console.log("Data:", data);

    const btnInsert = document.getElementById('btnInsert');
    btnInsert.classList.add('is-loading');

    postWithToken(target_url, data, responseData);
};

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

document.getElementById("deadline").value = getCurrentDate();
document.getElementById("deadline").min = getCurrentDate();

document.getElementById("deadline").addEventListener("change", () => {
    const startDate = document.getElementById("deadline").value;
    document.getElementById("deadline").min = startDate;
});

const responseData = (result) => {
    const btnInsert = document.getElementById('btnInsert');
    btnInsert.classList.remove('is-loading');
    console.log("Result:", result);
    if (result.status === true) {
        sessionStorage.removeItem("selectedCategory");

        Swal.fire({
            icon: "success",
            title: "Insert Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list_kegiatan.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Insert Failed",
            text: result.message,
        });
    }
};

const btnInsert = document.getElementById("btnInsert");

btnInsert.addEventListener("click", insertTodo);
