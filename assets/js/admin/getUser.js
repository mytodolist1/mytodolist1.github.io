import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formUserAll } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist";

const dataUsers  = (value) => {
    const data = formUserAll
    .replace("#EMAIL#", value.email)
    .replace("#USERNAME#", value.username)
    .replace("#ROLE#", value.role)

    addInner("tableUserAll", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUsers);
    }
}

getWithToken(target_url, responseData);