//todo user
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

export const formTodolist1 = `
  <td></td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
  <td data-label="Category" style="color: red; font-weight: bold;">##CATEGORY#</td>
`;

export const formTodoCategory = `
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

export const titleCategory = `
  <p data-label="Category" style="color: red; font-weight: bold;">
    <span class="icon"><i class="mdi mdi-pound"></i></span>
    #CATEGORY#
  </p>
`;

export const sidebarCategory = `
  <li data-label="Category">
    <a href="category.html?category=#ID#" class="has-icon">
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

// profile user
export const formProfile = `
  <a href="edit_user.html?_id=#IDEDIT#" class="control-icon" type="button">
    <span class="icon"><i class="mdi mdi-pencil-box-multiple-outline"></i></span>
  </a>
  <br>
  <label class="label">Username</label>
  <div class="control is-clearfix">
    <input type="text" value="#USERNAME#" class="input" readonly />
  </div>
  <br>
  <br>
  <label class="label">E-mail</label>
  <div class="control is-clearfix">
    <input type="email" value="#EMAIL#" class="input" readonly />
  </div>
`;

export const modalHapus = `
<button class="button is-black jb-modal-close" onclick="deleteUser('#HAPUS#')">Delete</button>
`;

export const navbarUser = `
  <div class="is-user-name">
    <span class="menu-item-label" id="username">#USERNAME#</span>
  </div>
`;

//admin
export const formTodolistAdmin = `
  <td></td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
  <td data-label="Category" style="color: red; font-weight: bold;">##CATEGORY#</td>
  <td data-label="TimeStamp">
    <div class="w-auto p-2">
      <p class="mb-1"><b>Created At:</b> #CREATEDAT#</p>
      <p class="mb-1"><b>Updated At:</b> #UPDATEDAT#</p>
    </div>
  </td>
  <td data-label="Username">#USER#</td>
`;

export const formUserAll = `
  <td></td>
  <td data-label="Email">#EMAIL#</td>
  <td data-label="Phone Number">#PHONE#</td>
  <td data-label="Username">#USERNAME#</td>
  <td data-label="Role">#ROLE#</td>
`;