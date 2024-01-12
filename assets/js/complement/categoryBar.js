import { addInner } from "https://jscroot.github.io/element/croot.js";
import { sidebarCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-category";

const dataCategory  = (value) => {
    const data = sidebarCategory
    .replace("#CATEGORY#", value.category)
    .replace("#ID#", value.category);

    addInner("categoryBar", data);
}

const responseData = (result) => {
    if (result.status === true) {
        result.datatags.forEach(dataCategory);
    }
}

getWithToken(target_url, responseData);