import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const insertTodo = () => {
    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-insertTodo";
    const tokenkey = "Authorization";
    const tokenvalue = getCookie("Authorization");

    const data = {
        "title": getValue("title"),
        "description": getValue("description"),
        "deadline": getValue("deadline"),
    };

    postWithToken(target_url, tokenkey, tokenvalue, data, responseData);
}

const responseData = (result) => {
    if (result.status === true) {
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
}

const btnInsert = document.getElementById("btnInsert");

btnInsert.addEventListener("click", insertTodo);

