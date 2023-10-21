import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
    let target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist";
    let tokenkey = "token";
    let tokenvalue = "10611cb1b98e2cbb5d33ef726e018db5a57205bfd79389030b4fca7759f70427";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }
    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
}

function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    alert("Berhasil Masuk")
    window.location.href = "dashboard.html";
}