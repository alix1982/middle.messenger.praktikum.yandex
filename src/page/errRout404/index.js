import Handlebars from "handlebars";
import errRout404 from "./errRout404";

export function errorRout404Html() {
    // document.addEventListener('DOMContentLoaded', () => {
        const root = document.querySelector('#app');
        const template = Handlebars.compile(errRout404);
        const result = template({});
        root.innerHTML = result;
    // });
}