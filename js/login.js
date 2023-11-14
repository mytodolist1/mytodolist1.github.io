import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";
// import { checkTokenAndRedirect } from "./auth.js";

export default function Login(){

    let target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-login";
    let tokenkey = "token";
    // let tokenvalue = "d4f1c80e75682f5cc33895fb3ccfe6e5165fea6df42d463eb7144e34db2d3ef0"; 
    let data = {
        "username": getValue("username"),
        "password": getValue("password"),
    };

    postWithToken(target_url, 'Authorization', 'Bearer ' + tokenkey, data, responseData);

}
function responseData(result) {
    alert(result.message);
    
    if (result.message === "Login success") {
        setCookieWithExpireHour("token", result.token, 2);
        window.location.href = "index.html"; 
    } else {
        return false;
    }
}

document.getElementById("button").addEventListener("click", Login);
