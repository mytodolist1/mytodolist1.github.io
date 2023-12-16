import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistDone } from "../temp/table.js";
import { convertToLocal } from "../complement/timestamp.js";

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

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getIsDone";

const dataTodoDone  = (value) => {
    const timestamp = value.timeclear;
    const timeclear = convertToLocal(timestamp);

    const data = formTodolistDone
    .replace("#STATUS#", value.isdone ? "Done" : "clear")
    .replace("#CLEAR#", timeclear)
    .replace("#TITLE#", value.todo.title)
    .replace("#DESCRIPTION#", value.todo.description)
    .replace("#DEADLINE#", value.todo.deadline)
    .replace("#TIME#", value.todo.time)

    addInner("tableTodolistDone", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodoDone);
    }
}

getWithToken(target_url, responseData);