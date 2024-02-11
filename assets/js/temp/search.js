export const searchTodo = (todos, inputSearch, data, id) => {
    const keyword = inputSearch.value.toLowerCase();

    const filteredTodos = todos.filter(todo => {
        return (
            todo.title.toLowerCase().includes(keyword) ||
            todo.deadline.toLowerCase().includes(keyword) ||
            todo.tags.category.toLowerCase().includes(keyword)
        );
    });

    const table = document.getElementById(id);

    if (filteredTodos.length > 0) {
        table.innerHTML = "";
        filteredTodos.forEach(data);
    } else {
        table.innerHTML = "<td colspan='7' style='color: red;'><center><b>No data found</b></center></td>";
    }
};
