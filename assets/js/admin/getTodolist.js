import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formTodolistAdmin } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodolist";

const getAllUsers = async () => {
    const response = await fetch("https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist");
    const responseData = await response.json();
    const users = responseData.data; // Asumsikan data berada di properti "data"
    console.log("All Users:", users);
    return users;
};
const findUserByUid = (users, uid) => {
    return users.find(user => user.uid === uid);
};

const dataTodolist = async (value) => {
    console.log("value: ", value);

    const allUsers = await getAllUsers();

    const foundUser = findUserByUid(allUsers, value.user.uid);

    if (foundUser) {
        const data = formTodolistAdmin
            .replace("#TITLE#", value.title)
            .replace("#DESCRIPTION#", value.description)
            .replace("#DEADLINE#", value.deadline)
            .replace("#TIME#", value.time)
            .replace("#CATEGORY#", value.tags.category)
            .replace("#CREATEDAT#", value.timestamps.createdat)
            .replace("#UPDATEDAT#", value.timestamps.updatedat)
            .replace("#UID#", value.user.uid)
            .replace("#USERNAME#", foundUser.username); // Menggunakan informasi username dari informasi pengguna yang ditemukan

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
