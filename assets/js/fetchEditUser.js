import { isiData } from "./editUser.js";

const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

const urlFetch = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getUserByID?_id=" + _id;

function getUserByID(target_url, responseFunction) {

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => responseFunction(JSON.parse(result)))
    .catch((error) => console.log("error", error));
}

getUserByID(urlFetch, isiData);