//user
export const formTodolist = `
  <td></td>
  <td data-label="Status" class="buttons is-left">
    <button class="btn is-link is-outlined" type="button" onclick="doneTodo('#DONE#')">
      <span class="icon"><i class="mdi mdi-check-bold"></i></span>
    </button>
  </td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
  <td data-label="Action" class="buttons is-left">
      <a href="edit.html?_id=#IDEDIT#" class="btn is-dark" data-todo-id="#IDHAPUS#" type="button">
        <span class="icon"><i class="mdi mdi-eye-circle"></i></span>
      </a>
      <button class="btn is-dark is-outlined" type="button" onclick="deleteTodo('#DELETE#')">
        <span class="icon"><i class="mdi mdi-delete-circle"></i></span>
      </button>
  </td>
`;

export const formTodolistDone = `
  <td></td>
  <td data-label="Status" style="color: blue; font-weight: bold;">#STATUS#</td>
  <td data-label="Time Clear">#CLEAR#</td>
  <td data-label="Title">#TITLE#</td>
  <td data-label="Description">#DESCRIPTION#</td>
  <td data-label="Deadline">#DEADLINE# #TIME#</td>
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
  <p class="menu-label"></p>
  <div class="menu-list">
    <div class="menu-item">
      <div class="menu-content">
        <div class="is-user-avatar">
          <img src="../assets/img/todolist.ico" alt="#USERNAME#">
        </div>
        <div class="is-user-info">
          <div class="is-user-name">
            <span class="menu-item-label">#USERNAME#</span>
          </div>
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