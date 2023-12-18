import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue, setValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { format12Hours, formatDate } from "../temp/timestamp.js";

const insertTodo = () => {
    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-insertTodo";
    const tokenkey = "Authorization";
    const tokenvalue = getCookie("Authorization");

    const storedCategory = sessionStorage.getItem("selectedCategory");
    const category = getValue("category") ? setValue("category", storedCategory) : "";

    console.log("category:", storedCategory);

    const data = {
        "title": getValue("title"),
        "description": getValue("description"),
        "deadline": formatDate(getValue("deadline")),
        "time": format12Hours(getValue("time")),
        "category": category,   
    };

    console.log("category3", category);

    console.log("Data:", data);

    postWithToken(target_url, tokenkey, tokenvalue, data, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result, result.data);

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
