import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodoCategory, titleCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { setReminder } from "../temp/reminder.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

sessionStorage.getItem("selectedCategory");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodoByCategory?category=" + category;

const dataTodo = (value) => {
    console.log(value);
    const data = formTodoCategory
        .replace("#TITLE#", value.title)
        .replace("#DESCRIPTION#", value.description)
        .replace("#DEADLINE#", value.deadline)
        .replace("#TIME#", value.time)
        .replace("#DONE#", value._id)
        .replace("#IDEDIT#", value._id)
        .replace("#DELETE#", value._id)
        .replace("#IDHAPUS#", value._id);

    addInner("tableTodoCategory", data);

    setReminder(value.deadline, value.time);
}

const Category = (value) => {
    console.log(value);
    const data = titleCategory
        .replace("#CATEGORY#", value.tags.category);

    addInner("category", data);
}

const responseData = (result) => {
    console.log(result);
    console.log(result.data);
    if (result.status === true) {
        result.data.forEach((value, index) => {
            if (index === 0) {
                // Hanya panggil Category untuk data pertama
                Category(value);
            }
            dataTodo(value);
        });
    }
}

getWithToken(target_url, responseData);

const addIcon = document.querySelector('#btnAddTodo');
addIcon.addEventListener('click', function() {
    // Jangan hapus session storage jika klik ikon
    sessionStorage.setItem("selectedCategory", category);
});