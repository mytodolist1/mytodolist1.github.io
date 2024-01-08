import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistAdmin } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodolist";

const dataTodolist  = (value) => {
    const data = formTodolistAdmin
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CREATEDAT#", value.timestamp.createdat)
    .replace("#UPDATEDAT#", value.timestamp.updatedat)
    .replace("#UID#", value.user.uid)

    addInner("tableTodolistAdmin", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodolist);
    }
}

getWithToken(target_url, responseData);
