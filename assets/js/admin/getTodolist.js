import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistAdmin } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { convertToLocal } from "../temp/timestamp.js";
import { hideLoading } from "../complement/loading.js";

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodolist";
const target_url = "https://vercel-go-sandy.vercel.app/todo";

const dataTodolist  = (value) => {
    const timestamp1 = value.timestamps.createdat;
    const createdAt = convertToLocal(timestamp1);

    const timestamp2 = value.timestamps.updatedat;
    const updatedAt = convertToLocal(timestamp2);

    const data = formTodolistAdmin
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CATEGORY#", value.tags.category)
    .replace("#CREATEDAT#", createdAt)
    .replace("#UPDATEDAT#", updatedAt)
    .replace("#USER#", value.user.username)

    addInner("tableTodolistAdmin", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach(dataTodolist);
    }
    hideLoading();
}

getWithToken(target_url, responseData);