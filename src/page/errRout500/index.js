import Handlebars from "handlebars";
import errRout500 from "./errRout500";
import { renderContentHandlebars } from "../..";

export function errorRout500Html() {
    // document.addEventListener('DOMContentLoaded', () => {
        renderContentHandlebars('#app', errRout500)
        // const root = document.querySelector('#app');
        // const template = Handlebars.compile(errRout500);
        // const result = template({});
        // root.innerHTML = result;
    // });
}
