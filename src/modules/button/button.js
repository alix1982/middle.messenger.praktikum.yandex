export default function (textButton, idButton, handleClickAuth) {

    // <button class='button' onclick='${handleClickAuth}'>${textButton}</button>
    return `
        <button class='button' id=${idButton}>${textButton}</button>

    `
}
