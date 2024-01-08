import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist1 } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-logTodo";

const dataTodoNew  = (value) => {
    console.log("value: ", value);

    const latest = value.change[value.change.length - 1];
    const datanew = latest.datanew;

    const data = formTodolist1
    .replace("#TITLE#", datanew.title)
    .replace("#DESCRIPTION#", datanew.description)
    .replace("#DEADLINE#", datanew.deadline)
    .replace("#TIME#", datanew.time)
    .replace("#CATEGORY#", datanew.tags.category)

    addInner("tableTodolistNew", data);
}

const responseDataNew = (result) => {
    console.log("result: ", result);
    if (result.status === true) {
        result.data.forEach(dataTodoNew);
    }
}

getWithToken(target_url, responseDataNew);