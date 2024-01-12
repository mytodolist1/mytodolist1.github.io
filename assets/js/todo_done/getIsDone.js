import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistDone } from "../temp/table.js";
import { convertToLocal } from "../temp/timestamp.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-tododone";

const dataTodoDone  = (value) => {
    const timestamp = value.timeclear;
    const timeclear = convertToLocal(timestamp);

    const data = formTodolistDone
    .replace("#STATUS#", value.isdone ? "Done" : "Done")
    .replace("#CLEAR#", timeclear)
    .replace("#TITLE#", value.todo.title)
    .replace("#DESCRIPTION#", value.todo.description)
    .replace("#DEADLINE#", value.todo.deadline)
    .replace("#TIME#", value.todo.time)
    .replace("#CATEGORY#", value.todo.tags.category);

    addInner("tableTodolistDone", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodoDone);
    }
}

getWithToken(target_url, responseData);