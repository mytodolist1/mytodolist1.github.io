import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolist } from "../temp/table.js";

export const searchTodo = (todos, inputSearch) => {
    const keyword = inputSearch.value.toLowerCase();

    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(keyword));

    const tableTodolist = document.getElementById('tableTodolist');
    tableTodolist.innerHTML = '';

    filteredTodos.forEach(value => {
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
    });
};
