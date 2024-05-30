import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodoCategory, titleCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { setReminder } from "../temp/reminder.js";
import { hideLoading } from "../complement/loading.js";
import { searchTodo } from "../temp/search.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

localStorage.setItem("selectedCategory", category);

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-category?category=" + category;
const target_url = "https://vercel-go-sandy.vercel.app/todo?category=" + category;

const inputSearch = document.getElementById('searchInput');
const btnSearch = document.getElementById('searchButton');

const dataTodo = (value) => {
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
}

const Category = (value) => {
    const data = titleCategory
        .replace("#CATEGORY#", value.tags.category);

    addInner("category", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach((value, index) => {
            if (index === 0) {
                Category(value);
            }
            dataTodo(value);
        });

        setReminder(result.data);

        btnSearch.addEventListener('click', (event) => {
            event.preventDefault();
            searchTodo(result.data, inputSearch, dataTodo, "tableTodoCategory");
        });
    }
    hideLoading();
}

getWithToken(target_url, responseData);

