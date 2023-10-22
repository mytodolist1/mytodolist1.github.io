import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-post";
    let tokenkey = "token";
    let tokenvalue = "d4f1c80e75682f5cc33895fb3ccfe6e5165fea6df42d463eb7144e34db2d3ef0"; 
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}
function responseData(result) {
    setInner("pesan", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    
    if (result.message === "Selamat Datang") {
        // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
        window.location.href = "dashboard.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
    } else if (result.message === "Password Salah") {
        // Jika pesan kesalahan adalah "Password salah", arahkan ke halaman error.
        window.location.href = "login.html";
    } else {
        // Penanganan lainnya (pesan kesalahan lainnya)
        window.location.href = "404.html";
    }
}


// export default function PostSignUp() {
//     let target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-post";
//     let tokenkey = "token";
//     let tokenvalue = "d4f1c80e75682f5cc33895fb3ccfe6e5165fea6df42d463eb7144e34db2d3ef0";
//     let datainjson = {
//         "username": getValue("username"),
//         "password": getValue("password")
//     }

//     postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
// }

// function responseData(result) {

//     setInner("pesan", result.message);
//     if (result.message == "Selamat Datang") {
//         setCookieWithExpireHour("token", result.token, 2);
//         alert("Berhasil Masuk " + result.message)
//         window.location.href = "../dashboard.html";
//     } else {
//         alert("Gagal Masuk " + "password atau username salah")
//         console.log(result.message);
//     }
// }

