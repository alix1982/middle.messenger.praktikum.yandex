import button from "../../modules/button/button";
import input from "../../modules/input/input";
import chatsList from "./modules/chatsList/chatsList";

export default function (dataChats, idChatSelected) {
    return `
         <main class='chats'>
            <section class='chats__list'>
                ${button('Профиль &gt;', 'profileButton')}
                <form>
                    ${input('search', 'text', '&#128269;&nbsp;Поиск ')}
                </form>
                ${chatsList(dataChats)}
            </section>
            <section class='chats__item'>
                <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
            </section>
        </main>
    `
}
