import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formUserAll } from "../table.js";

function get(target_url, responseFunction) {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist";

const dataUsers  = (value) => {
    const data = formUserAll
    .replace("#UID#", value.UID)
    .replace("#EMAIL#", value.email)
    .replace("#USERNAME#", value.username)
    .replace("#ROLE#", value.role)

    addInner("tableUserAll", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUsers);
    }
}

get(target_url, responseData);