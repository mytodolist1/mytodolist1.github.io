import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "../temp/table.js";
import { setReminder } from "../temp/reminder.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo";

const btnInsert = document.getElementById('todayTaskButton');
btnInsert.classList.remove('is-outlined');

const inputSearch = document.getElementById('searchInput');
const btnSearch = document.getElementById('searchButton');

const dataTodoNow  = (value) => {
    // console.log("value: ", value);
    const data = formTodolist
    .replace("#TITLE#", value.title)
    .replace("#DESCRIPTION#", value.description)
    .replace("#DEADLINE#", value.deadline)
    .replace("#TIME#", value.time)
    .replace("#CATEGORY#", value.tags.category)
    .replace("#DONE#", value._id)
    .replace("#IDEDIT#", value._id)
    .replace("#DELETE#", value._id)
    .replace("#IDHAPUS#", value._id);

    addInner("tableTodolist", data);

    console.log(value);

    setReminder(value.deadline, value.time, value.title, value.user.phonenumber, value.user.Username);
}

const responseData = (result) => {
    // console.log("result: ", result);
    if (result.status === true) {
        const today = new Date();
        const formattedToday = (today.getMonth() + 1).toString().padStart(2, '0') + '/' 
        + today.getDate().toString().padStart(2, '0') + '/' 
        + today.getFullYear();

        // Filter todos with a deadline equal to today
        const todosForToday = result.data.filter(todo => {
            if (todo.deadline) {
                const deadlineDate = new Date(todo.deadline);
                const formattedDeadline = (deadlineDate.getMonth() + 1).toString().padStart(2, '0') + '/' 
                + deadlineDate.getDate().toString().padStart(2, '0') + '/' 
                + deadlineDate.getFullYear();

                return formattedDeadline === formattedToday;
            }
            return false;
        });

        todosForToday.forEach(dataTodoNow);

        btnSearch.addEventListener('click', (event) => {
            event.preventDefault();
            searchTodo(result.data, inputSearch);
        });
    }
}

getWithToken(target_url, responseData);