import { isiData } from "./edit.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const urlParams = new URLSearchParams(window.location.search);
// console.log("urlParams:", urlParams);
const _id = urlParams.get("_id");

// console.log("todoID:", _id);

const urlFetch = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getTodoByID?_id=" + _id;

function getTodoByID(target_url, responseFunction) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

getTodoByID(urlFetch, isiData);