import { addInner } from "https://jscroot.github.io/element/croot.js";
import { sidebarCategory } from "../temp/table.js";
import { getWithToken } from "../temp/component.js";
import { hideLoading } from "../complement/loading.js";

// const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-category";
const target_url = "https://vercel-go-sandy.vercel.app/todo";

const dataCategory  = (value) => {
    const data = sidebarCategory
    .replace("#CATEGORY#", value)
    .replace("#ID#", value);

    addInner("categoryBar", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        const categories = new Set();
      
        result.data.forEach(item => {
          const category = item.tags.category;
          categories.add(category);
        });
      
        categories.forEach(category => {
          dataCategory(category);
        });
      }
    hideLoading();
}

getWithToken(target_url, responseData);