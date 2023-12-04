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
  <a href="edit.html?_id=#IDEDIT#" class="button is-dark jb-modal" data-todo-id="#IDHAPUS#" data-target="edit-modal" type="button">
    <span class="icon"><i class="mdi mdi-eye-circle"></i></span>
  </a>
  <button class="button is-dark is-outlined" type="button" onclick="deleteTodo('#DELETE#')">
    <span class="icon"><i class="mdi mdi-delete-circle"></i></span>
  </button>
</div>
</td>
`;

export const formProfile = `
<label class="label">Username</label>
<div class="control is-clearfix">
  <input type="text" value="#USERNAME#" class="input is-static">
</div>
<hr>
<label class="label">E-mail</label>
<div class="control is-clearfix">
  <input type="text" value="#EMAIL#" class="input is-static">
</div>
`;