export const searchTodo = (todos, inputSearch, data) => {
    const keyword = inputSearch.value.toLowerCase();

    const filteredTodos = todos.filter(todo => {
        return todo.title.toLowerCase().includes(keyword) || 
        todo.deadline.toLowerCase().includes(keyword) || 
        todo.tags.category.toLowerCase().includes(keyword);
    });

    const tableTodolist = document.getElementById('tableTodolist');
    const tableTodolistCategory = document.getElementById('tableTodoCategory');
    const tableTodolistDone = document.getElementById('tableTodolistDone');

    switch (true) {
        case tableTodolist !== null:
            tableTodolist.innerHTML = '';
            filteredTodos.forEach(data);
            break;
        
        case tableTodolistCategory !== null:
            tableTodolistCategory.innerHTML = '';
            filteredTodos.forEach(data);
            break;

        case tableTodolistDone !== null:
            tableTodolistDone.innerHTML = '';
            filteredTodos.forEach(data);
            break;

        default:
            break;
    }
};
