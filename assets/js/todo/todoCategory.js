import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodoCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodoByCategory?category=" + category;

const dataTodo = (value) => {
    const data = formTodoCategory
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)

    addInner("tableTodoCategory", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodo);
    }
}

getWithToken(target_url, responseData);