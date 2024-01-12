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

    // console.log("Data:", data);

    postWithToken(target_url, data, responseData);
};

const responseData = (result) => {
    // console.log("Server Response:", result, result.data);

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
