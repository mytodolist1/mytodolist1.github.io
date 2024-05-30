import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistDone } from "../temp/table.js";
import { convertToLocal } from "../temp/timestamp.js";
import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";
import { searchTodo } from "../temp/search.js";
import { timeRemaining } from "../complement/timeRemining.js";

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-tododone";
const target_url = "https://vercel-go-sandy.vercel.app/todo/clear";

const inputSearch = document.getElementById('searchInput');
const btnSearch = document.getElementById('searchButton');

const dataTodoDone  = (value) => {
    const timeclear = convertToLocal(value.timeclear);
    const timeRemainings = timeRemaining(value.timeclear, 30);

    let color = "color: blue; font-weight: bold;";
    if (timeRemainings < 5) {
        color = "color: red; font-weight: bold;";
    }

    const data = formTodolistDone
    .replace("#STATUS#", value.isdone ? "Done" : "Done")
    .replace("#CLEAR#", timeclear)
    .replace("#TITLE#", value.todo.title)
    .replace("#DESCRIPTION#", value.todo.description)
    .replace("#DEADLINE#", value.todo.deadline)
    .replace("#TIME#", value.todo.time)
    .replace("#CATEGORY#", value.todo.tags.category)
    .replace("#FILE#", value.todo.file)
    .replace("#FILE1#", value.todo.file)
    .replace("#EXPIRED#", `${timeRemainings} days`)
    .replace("#COLOR#", color);

    addInner("tableTodolistDone", data);
}

const responseData = (result) => {
    console.log(result);
    if (result.status === 200) {
        result.data.forEach(dataTodoDone);
    }

    btnSearch.addEventListener('click', (event) => {
        event.preventDefault();
        searchTodo(result.data, inputSearch, dataTodoDone, "tableTodolistDone");
    });
    hideLoading();
}

getWithToken(target_url, responseData);