import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistAdmin } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { convertToLocal } from "../temp/timestamp.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodolist";

const dataTodolist  = (value) => {
    console.log("value: ", value);

    const ts = value.timestamps;
    const timestamp = convertToLocal(ts);

    const data = formTodolistAdmin
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CATEGORY#", value.tags.category)
    .replace("#CREATEDAT#", timestamp.createdat)
    .replace("#UPDATEDAT#", timestamp.updatedat)
    .replace("#UID#", value.user.uid)

    addInner("tableTodolistAdmin", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodolist);
    }
}

getWithToken(target_url, responseData);