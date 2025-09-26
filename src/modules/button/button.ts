import { block } from "../block/block";

button.prototype.block = block as ()=>void;


export function button (idButton: string, textButton: string, typeButton='button'): string {

    // <button class='button' onclick='${handleClickAuth}'>${textButton}</button>
    return `
        <button class='button' id=${idButton} type=${typeButton}>${textButton}</button>

    `
}
