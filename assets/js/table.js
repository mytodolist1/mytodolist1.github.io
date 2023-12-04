export const formTodolist = `
<td class="is-checkbox-cell">
  <label id="checkbox" class="b-checkbox checkbox">
    <input type="checkbox" value="false" class="checkbox">
    <span class="check"></span>
  </label>
</td>
<td></td>
<td data-label="Title">#TITLE#</td>
<td data-label="Description">#DESCRIPTION#</td>
<td data-label="Date">#DEADLINE#</td>
<td class="is-actions-cell">
<div class="buttons is-right">
  <a href="edit.html?_id=#IDEDIT#" class="button is-primary jb-modal" data-todo-id="#IDHAPUS#" data-target="edit-modal" type="button">
    <span class="icon"><i class="mdi mdi-eye-circle"></i></span>
  </a>
  <button class="button is-danger" type="button" onclick="deleteTodo('#DELETE#')">
    <span class="icon"><i class="mdi mdi-delete-circle"></i></span>
  </button>
</div>
</td>
`;

export const formProfile = `
<a href="edit_user.html?_id=#IDEDIT#" class="control-icon is-hidden">
  <span class="icon"><i class="mdi mdi-pencil-box-multiple-outline"></i></span>
</a>
<br>

<div class="control is-clearfix">
  <input type="text" value="#USERNAME#" class="input is-static">
</div>
<br>
<br>

<div class="control is-clearfix">
  <input type="text" value="#EMAIL#" class="input is-static">
</div>
`;