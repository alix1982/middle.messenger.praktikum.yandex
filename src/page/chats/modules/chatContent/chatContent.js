import input from "../../../../modules/input/input"
import { transformMonth } from "../../../../utils/constant";
import { chatMessage } from "./chatMessage/chatMessage";

export function chatContent(idChat, chat) {
    const {name, messeges, avatarUser} = chat;
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
            
            renderMesseges += `<li class='chatContent__contentTime'>${dateMessages}  ${transformMonth[monthMessages]}</li>`;
        };

        return renderMesseges += chatMessage(messege)
    })

    return `
        <header class='chatContent__header'>
            <article class='chatContent__user'>
                <img class='chatContent__avatar' src=${avatarUser} alt='аватар'/>
                <p class='chatContent__heading'>${name}</p>
            </article>
            <button class='chatContent__menu' type='button'>
            </button>
        </header>
        <ul class='chatContent__content'>
            ${renderMesseges}
        </ul>
        <footer>
            <form class='chatContent__control'>
                ${input('message', 'text', 'Сообщение ')}
                <button class='chatContent__controlButton' type='submit'></button>
            </form>
        </footer>
    `
}
