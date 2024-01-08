import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistAdmin } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodolist";

const dataTodolist = async (value) => {
    console.log("value: ", value);

    const allUsers = await getAllUsers();

    const foundUser = findUserByUID(allUsers, value.user.uid);

    if (foundUser) {
        const data = formTodolistAdmin
            .replace("#TITLE#", value.title)
            .replace("#DESCRIPTION#", value.description)
            .replace("#DEADLINE#", value.deadline)
            .replace("#TIME#", value.time)
            .replace("#CATEGORY#", value.tags.category)
            .replace("#CREATEDAT#", value.timestamps.createdat)
            .replace("#UPDATEDAT#", value.timestamps.updatedat)
            .replace("#UID#", foundUser.uid)
            .replace("#USERNAME#", foundUser.username);

        addInner("tableTodolistAdmin", data);
    } else {
        console.log("Pengguna dengan uid tersebut tidak ditemukan.");
    }
};

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataTodolist);
    }
};

getWithToken(target_url, responseData);

// Fungsi untuk mendapatkan data pengguna
const getAllUsers = async () => {
    const response = await fetch("https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist");
    const users = await response.json();
    return users;
};

const findUserByUID = (users, uid) => {
    return users.find(user => user.uid === uid);
};
