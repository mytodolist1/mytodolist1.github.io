import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { sidebarCategory } from "../temp/table.js";

function getWithToken(target_url, responseFunction) {
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
        .catch(error => console.log('error', error));
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodoByCategory?category=" + category;

const dataCategory  = (value) => {
    const data = sidebarCategory
    .replace("#CATEGORY#", value.category)

    addInner("categoryBar", data);

}

const responseData = (result) => {
    if (result.status === true) {
        console.log(result.data);
        result.data.forEach(dataCategory);
    }
}

getWithToken(target_url, responseData);