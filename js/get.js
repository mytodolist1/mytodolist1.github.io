import { addInner } from "https://jscroot.github.io/element/croot.js";
import { formProfile } from "./table";
import { get } from "./process.js";

function showProfile(result) {
    result.forEach(showData);
    console.log(result);
}

const urlParams = new URLSearchParams(window.location.search);
const user = urlParams.get("user");

let targer_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-GetUserByUsername?username=" + user;	 

function showData(data) {
    let form = formProfile
        .replace("#EMAIL#", data.email)
        .replace("#USERNAME#", data.username);

    addInner("profile", form);
}

get(targer_url, showProfile);