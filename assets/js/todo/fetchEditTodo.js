import { getWithToken } from "../temp/component.js";
import { isiData } from "./editTodo.js";

const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

const urlFetch = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-todo?_id=" + _id;

getWithToken(urlFetch, isiData);
