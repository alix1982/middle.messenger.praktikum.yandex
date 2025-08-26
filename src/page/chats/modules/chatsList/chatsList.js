import chatPoint from "../chatPoint/chatPoint";

    // ${chatPoint()}
    // ${chatPoint()}

export default function (dataChats) {
    let renderContent = '';
    dataChats.map((item) =>
        renderContent += chatPoint(item)
    )
    // console.log(renderContent)
    return `
        <ul class='chatsList'>
            ${renderContent}
        </ul>
    `
}