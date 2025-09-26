import { block } from "../block/block";

buttonLink.prototype.block = block as ()=>void;

export function buttonLink (idButton: string, textButton: string, typeButton='button') {

    // <button class='button' onclick='${handleClickAuth}'>${textButton}</button>
    return `
        <button class='buttonLink' id=${idButton} type=${typeButton}>${textButton}</button>
    `
}
