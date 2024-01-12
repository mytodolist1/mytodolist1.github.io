import { addInner } from "https://jscroot.github.io/element/croot.js";
import { navbarUser } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-user";

const dataUser  = (value) => {
    const data = navbarUser
    .replace("#USERNAME#", value.username)

    addInner("usernameNav", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUser);
    }
}

getWithToken(target_url, responseData);