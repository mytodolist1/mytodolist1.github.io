import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist1 } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-logTodo";

const dataTodoOld  = (value) => {
    console.log("value: ", value);

    dataold = value.change[0].dataold;

    console.log("dataold: ", dataold);

    const data = formTodolist1
    .replace("#TITLE#", dataold.title)
    .replace("#DESCRIPTION#", dataold.description)
    .replace("#DEADLINE#", dataold.deadline)
    .replace("#TIME#", dataold.time)
    .replace("#CATEGORY#", dataold.tags.category)

    addInner("tableTodolistOld", data);
}

const responseDataOld = (result) => {
    console.log("result: ", result);
    if (result.status === true) {
        result.data.forEach(dataTodoOld);
    }
}

getWithToken(target_url, responseDataOld);