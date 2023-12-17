import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodoCategory, titleCategory } from "../temp/table.js";

function getWithToken(target_url, responseFunction, responseTitle) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", getCookie("Authorization"));

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .then(result => responseTitle(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodoByCategory?category=" + category;

const dataTodo = (value) => {
    const data = formTodoCategory
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)

    addInner("tableTodoCategory", data);
}

const dataTitle = (value) => {
    const data = titleCategory
    .replace("#CATEGORY#", value.category)

    addInner("category", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodo);
    }
}

const responseTitle = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTitle);
    }
}

getWithToken(target_url, responseData, responseTitle);