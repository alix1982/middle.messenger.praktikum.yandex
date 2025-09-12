// import Handlebars from "handlebars";
import {errRout500} from "./errRout500";
// import { renderContentHandlebars } from "../..";

export function errorRout500Html() {
    // console.log(errRout500);
    // console.log(errRout500.prototype);
    // document.addEventListener('DOMContentLoaded', () => {
        // renderContentHandlebars('#app', errRout500)
        errRout500.prototype.block('#app', [], {})
        // const root = document.querySelector('#app');
        // const template = Handlebars.compile(errRout500);
        // const result = template({});
        // root.innerHTML = result;
    // });
}
