import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistAdmin } from "../table.js";

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

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodolist";

const dataTodolist  = (value) => {
    const data = formTodolistAdmin
    .replace("#ID#", value._id)
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CREATEAT#", value.timestamp.createat)
    .replace("#UPDATEAT#", value.timestamp.updateat)
    .replace("#UID#", value.user.uid)

    addInner("tableTodolistAdmin", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodolist);
    }
}

get(target_url, responseData);