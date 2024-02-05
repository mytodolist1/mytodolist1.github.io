import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist1 } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-logTodo";

const btnInsert = document.getElementById('logEditButton');
btnInsert.classList.remove('is-outlined');

const dataTodoOld  = (value) => {
    const dataold = value.change[0].dataold;

    const data = formTodolist1
    .replace("#TITLE#", dataold.title)
    .replace("#DESCRIPTION#", dataold.description)
    .replace("#DEADLINE#", dataold.deadline)
    .replace("#TIME#", dataold.time)
    .replace("#CATEGORY#", dataold.tags.category)

    addInner("tableTodolistOld", data);
}

const dataTodoNew  = (value) => {
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

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodoOld);
        result.data.forEach(dataTodoNew);
    }
}

getWithToken(target_url, responseData);