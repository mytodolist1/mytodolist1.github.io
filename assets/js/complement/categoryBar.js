import { addInner } from "https://jscroot.github.io/element/croot.js";
import { sidebarCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";

// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");

const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-getCategory";

const dataCategory  = (value) => {
    console.log(value);
    const data = sidebarCategory
    .replace("#CATEGORY#", value.category)
    .replace("#IDCATEGORY#", value.category);

    addInner("categoryBar", data);
}

const responseData = (result) => {
    if (result.status === true) {
        console.log(result.category);
        result.category.forEach(dataCategory);
    }
}

getWithToken(target_url, responseData);