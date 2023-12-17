//user
export const formTodolist = `
  <td></td>
  <td data-label="Status" class="buttons is-left">
    <button class="button is-link is-outlined" type="button" onclick="doneTodo('#DONE#')"
    style="border-radius: 50%; width: 30px; height: 30px; padding: 3px; margin-right: 10px;">
      <span class="icon"><i class="mdi mdi-check-bold"></i></span>
    </button>
  </td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
  <td data-label="Category" style="color: red; font-weight: bold;">##CATEGORY#</td>
  <td data-label="Action" class="buttons is-left">
      <a href="edit.html?_id=#IDEDIT#" class="button is-dark" data-todo-id="#IDHAPUS#" type="button"
      style="border-radius: 50%; width: 30px; height: 30px; padding: 3px; margin-right: 10px;">
        <span class="icon"><i class="mdi mdi-eye"></i></span>
      </a>
      <button class="button is-dark is-outlined" type="button" onclick="deleteTodo('#DELETE#')"
      style="border-radius: 50%; width: 30px; height: 30px; padding: 3px; margin-right: 10px;">
        <span class="icon"><i class="mdi mdi-delete"></i></span>
      </button>
  </td>
`;

export const formTodoCategory = `
  <td></td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
`;

export const titleCategory = `
  <p data-label="Category">
    <span class="icon"><i class="mdi mdi-pound"></i></span>
    #CATEGORY#
  </p>
`;

export const sidebarCategory = `
  <li>
    <a href="category.html?category=#IDCATEGORY#">
      <p>
        <span class="icon"><i class="mdi mdi-minus"></i></span>
        #CATEGORY#
      </p>
    </a>
  </li>
`;

export const formTodolistDone = `
  <td></td>
  <td data-label="Status" style="color: blue; font-weight: bold;">
    <span class="icon"><i class="mdi mdi-check-bold"></i></span>
    #STATUS#
  </td>
  <td data-label="Time Clear">#CLEAR#</td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
  <td data-label="Category" style="color: red; font-weight: bold;">##CATEGORY#</td>
`;

export const formProfile = `
  <a href="edit_user.html?_id=#IDEDIT#" class="control-icon" type="button">
    <span class="icon"><i class="mdi mdi-pencil-box-multiple-outline"></i></span>
  </a>
  <br>
  <label class="label">Username</label>
  <div class="control is-clearfix">
    <input type="text" value="#USERNAME#" class="input" id="username">
  </div>
  <br>
  <br>
  <label class="label">E-mail</label>
  <div class="control is-clearfix">
    <input type="text" value="#EMAIL#" class="input" id="email">
  </div>
`;

export const navbarUser = `
  <div class="menu-item">
    <div class="menu-content">
      <div class="is-user-avatar">
        <img src="../assets/img/todolist.ico">
      </div>
      <div class="is-user-info">
        <div class="is-user-name">
          <span class="menu-item-label" id="username">#USERNAME#</span>
        </div>
      </div>
    </div>
  </div>
`;


//admin
export const formTodolistAdmin = `
  <td></td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# + #TIME#</td>
  <td data-label="TimeStamp">
    <div class="w-auto p-2">
      <p class="mb-1"><b>Created At:</b> #CREATEDAT#</p>
      <p class="mb-1"><b>Updated At:</b> #UPDATEDAT#</p>
    </div>
  </td>
  <td data-label="UID">#UID#</td>
`;

export const formUserAll = `
  <td></td>
  <td data-label="UID">#UID#</td>
  <td data-label="Email">#EMAIL#</td>
  <td data-label="Username">#USERNAME#</td>
  <td data-label="Role">#ROLE#</td>
`;