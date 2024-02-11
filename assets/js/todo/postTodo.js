import { getValue } from "https://jscroot.github.io/element/croot.js";
import { format12Hours, formatDate, convertFormatDateToStrip } from "../temp/timestamp.js";
import { postWithToken } from "../temp/component.js";

const insertTodo = () => {
    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    
    const formData = new FormData();
    formData.append("title", getValue("title"));
    formData.append("description", getValue("description"));
    formData.append("deadline", formatDate(getValue("deadline")));
    formData.append("time", format12Hours(getValue("time")));
    formData.append("category", getValue("category"));
    formData.append("file", file);

    const btnInsert = document.getElementById('btnInsert');
    btnInsert.classList.add('is-loading');

    postWithToken(target_url, formData, responseData);
};

const loadFromLocalStorage = () => {
    const selectedCategory = localStorage.getItem("selectedCategory");
    const selectedDate = localStorage.getItem("selectedDate");
    document.getElementById("category").value = selectedCategory;
    
    if (selectedDate) {
        const date = convertFormatDateToStrip(selectedDate);
        document.getElementById("deadline").value = date;
    }

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
        localStorage.removeItem("selectedCategory");
        localStorage.removeItem("selectedDate");

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

const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", () => {
    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("selectedDate");
    
    window.location.href = "list_kegiatan.html";
});

window.onload = loadFromLocalStorage;

const btnInsert = document.getElementById("btnInsert");
btnInsert.addEventListener("click", insertTodo);