import Handlebars from "handlebars";
import errRout500 from "./errRout500";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const template = Handlebars.compile(errRout500);
    const result = template({});
    root.innerHTML = result;

});