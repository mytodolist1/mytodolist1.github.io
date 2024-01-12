import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "../temp/table.js";
import { setReminder } from "../temp/reminder.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";

const dataTodo  = (value) => {
    // console.log("value: ", value);
    const data = formTodolist
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CATEGORY#", value.tags.category)
    .replace("#DONE#", value._id)
    .replace("#IDEDIT#", value._id)
    .replace("#DELETE#", value._id)
    .replace("#IDHAPUS#", value._id);

    addInner("tableTodolist", data);

    setReminder(value.deadline, value.time);
}

const responseData = (result) => {
    // console.log("result: ", result);
    if (result.status === true) {
        result.data.forEach(dataTodo);
    }
}

getWithToken(target_url, responseData);