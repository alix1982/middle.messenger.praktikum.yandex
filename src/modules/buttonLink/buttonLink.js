export default function (textButton, idButton, handleClickAuth) {

    // <button class='button' onclick='${handleClickAuth}'>${textButton}</button>
    return `
        <button class='buttonLink' id=${idButton}>${textButton}</button>

    `
}
