import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formProfile } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-user";

const dataUser  = (value) => {
    const data = formProfile
    .replace("#USERNAME#", value.username)
    .replace("#EMAIL#", value.email)
    .replace("#IDEDIT#", value._id);

    addInner("profileUser", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.data.forEach(dataUser);

        // console.log(result);
    }
}

getWithToken(target_url, responseData);