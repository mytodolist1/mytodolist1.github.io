import { isiData } from "./editUser.js";
import { get } from "../temp/component.js";

const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("_id");

const urlFetch = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-user?_id=" + _id;

get(urlFetch, isiData);