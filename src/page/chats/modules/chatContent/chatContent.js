import input from "../../../../modules/input/input"
import { transformMonth } from "../../../../utils/constant";
import { chatMessage } from "./chatMessage/chatMessage";

export function chatContent(idChat, chat) {
    const {name, messeges} = chat;
    const messagesSort = messeges.toSorted((a, b) => a.dateUnix - b.dateUnix);
    
    let renderMesseges = '';
    let dateMessages = 0;
    let monthMessages = -1;
    messagesSort.map((messege) => {
        let date = new Date(messege.dateUnix * 1000).getDate();
        let month = new Date(messege.dateUnix * 1000).getMonth();

        if (month !== monthMessages || date !== dateMessages) {
            monthMessages = month;
            dateMessages = date;
            
            renderMesseges += `<p class='chatContent__contentTime'>${dateMessages}  ${transformMonth[monthMessages]}</p>`;
        };

        return renderMesseges += chatMessage(messege)
    })

    return `
        <div class='chatContent__header'>
            <div class='chatContent__user'>
                <img class='chatContent__avatar'/>
                <p class='chatContent__heading'>${name}</p>
            </div>
            <button class='chatContent__menu'>
            </button>
        </div>
        <ul class='chatContent__content'>
            ${renderMesseges}
        </ul>
        <div class='chatContent__control'>
            ${input('newMessage', 'text', 'Сообщение ')}
            <button class='chatContent__controlButton'></button>
        </div>
    `
}
