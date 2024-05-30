import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formUserAll } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist";
const target_url = "https://vercel-go-sandy.vercel.app/user";

const dataUsers  = (value) => {
    const data = formUserAll
    .replace("#EMAIL#", value.email)
    .replace("#PHONE#", value.phonenumber)
    .replace("#USERNAME#", value.username)
    .replace("#ROLE#", value.role)

    addInner("tableUserAll", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach(dataUsers);
    }
    hideLoading();
}

getWithToken(target_url, responseData);