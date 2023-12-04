import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formProfile } from "./table.js";

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

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getUserByToken";

const dataUser  = (value) => {
    const data = formProfile
    .replace("#USERNAME#", value.username)
    .replace("#EMAIL#", value.email)

    addInner("profileUser", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUser);

        console.log(result);
    }
}

getWithToken(target_url, responseData);