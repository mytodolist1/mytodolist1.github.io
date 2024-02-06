import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodoCategory, titleCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { setReminder } from "../temp/reminder.js";
import { hideLoading } from "../complement/loading.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

localStorage.setItem("selectedCategory", category);

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-category?category=" + category;

const dataTodo = (value) => {
    // console.log(value);
    const data = formTodoCategory
        .replace("#TITLE#", value.title)
        .replace("#DESCRIPTION#", value.description)
        .replace("#DEADLINE#", value.deadline)
        .replace("#TIME#", value.time)
        .replace("#FILE#", value.file)
        .replace("#FILE1#", value.file)
        .replace("#DONE#", value._id)
        .replace("#IDEDIT#", value._id)
        .replace("#DELETE#", value._id)
        .replace("#IDHAPUS#", value._id);

    addInner("tableTodoCategory", data);

    setReminder(value.deadline, value.time, value.title, value.user.phonenumber, value.user.username);
}

const Category = (value) => {
    // console.log(value);
    const data = titleCategory
        .replace("#CATEGORY#", value.tags.category);

    addInner("category", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach((value, index) => {
            if (index === 0) {
                // Hanya panggil Category untuk data pertama
                Category(value);
            }
            dataTodo(value);
        });
    }
    hideLoading();
}

getWithToken(target_url, responseData);

