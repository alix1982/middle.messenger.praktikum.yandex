import chatPoint from "../chatPoint/chatPoint";

export default function (dataChats) {
    
    let renderContent = '';

    dataChats.map((item) =>
        renderContent += chatPoint(item)
    )

    return `
        <ul class='chatsList'>
            ${renderContent}
        </ul>
    `
}
