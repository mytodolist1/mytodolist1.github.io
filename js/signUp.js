// import { post } from "./postfunc.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const PostSignUp = () => {
    const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-post"; //Note, waktu gwa coba dirumah masih kagak bisa
    const datainjson = {
        username: getValue("username"),
        password: getValue("password")
    };
    console.log(datainjson);
    post(target_url, datainjson, responseData);
};

const responseData = (result) => {
    console.log(result);
    if (result.status === true) {
        alert(`Berhasil Masuk ${result.message}`);
        window.location.href = "login.html";
    } else {
        alert(`Gagal Signup, ` + result.message );
    }
};

window.PostSignUp = PostSignUp;