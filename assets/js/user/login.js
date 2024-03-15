import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";
import { postLogin } from "../temp/component.js";

const Login = () => {
    // const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-login";
    const target_url = " http://localhost:8081/login";
    
    const data = {
        username : getValue("username"),
        password : getValue("password"),
    };

    const btnLogin = document.getElementById('btnLogin');
    btnLogin.classList.add('is-loading');

    postLogin(target_url, data, responseData);
}

const responseData = (result) => {

    const btnLogin = document.getElementById('btnLogin');
    btnLogin.classList.remove('is-loading');

    if (result.status === 200) {
        const role = result.data.role;

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: result.message,
        }).then(() => {
            switch (role) {
                case "admin":
                    setCookieWithExpireHour("Authorizationadmin", result.token, 2);
                    window.location.href = "pages_admin/todolist_user.html";
                    break;

                case "user":
                    setCookieWithExpireHour("Authorization", result.token, 2);
                    window.location.href = "pages_user/list_kegiatan.html";
                    break;

                default:
                    console.error("Role pengguna tidak dikenali:", role);
            }
        });

    } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.message,
        });
    }
};

const btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", Login);
