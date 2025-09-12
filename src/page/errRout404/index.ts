// import Handlebars from "handlebars";
import {errRout404} from "./errRout404";
// import { renderContentHandlebars } from "../..";

export function errorRout404Html() {
    // document.addEventListener('DOMContentLoaded', () => {
        // renderContentHandlebars('#app', errRout404)
        errRout404.prototype.block('#app', [], {})
        
        // const root = document.querySelector('#app');
        // const template = Handlebars.compile(errRout404);
        // const result = template({});
        // root.innerHTML = result;
    // });
}
