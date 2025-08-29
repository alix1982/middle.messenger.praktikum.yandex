export default function (textButton, idButton, typeButton='button', handleClickAuth) {

    // <button class='button' onclick='${handleClickAuth}'>${textButton}</button>
    return `
        <button class='button' id=${idButton} type=${typeButton}>${textButton}</button>

    `
}
