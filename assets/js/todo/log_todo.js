import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist1 } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-logTodo";
const target_url = "https://vercel-go-sandy.vercel.app/todo/log";

const btnInsert = document.getElementById('logEditButton');
btnInsert.classList.remove('is-outlined');

const dataTodoOld  = (change) => {
    const dataold = change.dataold;

    const data = formTodolist1
        .replace("#TITLE#", dataold.title)
        .replace("#DESCRIPTION#", dataold.description)
        .replace("#DEADLINE#", dataold.deadline)
        .replace("#TIME#", dataold.time)
        .replace("#CATEGORY#", dataold.tags.category);

    addInner("tableTodolistOld", data);
}

const dataTodoNew  = (change) => {
    const datanew = change.datanew;

    const data = formTodolist1
        .replace("#TITLE#", datanew.title)
        .replace("#DESCRIPTION#", datanew.description)
        .replace("#DEADLINE#", datanew.deadline)
        .replace("#TIME#", datanew.time)
        .replace("#CATEGORY#", datanew.tags.category);

    addInner("tableTodolistNew", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach(value => {
            value.change.forEach(change => {
                dataTodoOld(change);
                dataTodoNew(change);
            });
        });
    }
    hideLoading();
}

getWithToken(target_url, responseData);