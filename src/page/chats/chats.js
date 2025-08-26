import input from "../../modules/input/input";
import chatsList from "./modules/chatsList/chatsList";

// <button class='chats__buttonSearch'>
//    Профиль &gt;
// </button>
// <div class='chats__itemHeader'>
//    <div class='chats__itemUser'>
//        <img class='chats__itemAvatar'/>
//        <p class='chats__itemHeading'>ДмитрийДмитрийДмитрийДмДмитрийДмитрийДмитрийДмитрийДмитрийДмитрийДмитрийДмитрийДмитрийитрийДмитрийДмитрийДмитрийДмитрийДмитрий</p>
//    </div>
//    <button class='chats__itemMenu'>
//    </button>
//</div>
//<div class='chats__itemContent'></div>
//<div class='chats__itemControl'>
//    ${input('newMessage', 'text', 'Сообщение ')}
//    <button class='chats__itemControlButton'></button>
//</div>

export default function (dataChats, idChatSelected) {
    // console.log(idChatSelected)
    return `
         <section class='chats'>
            <div class='chats__list'>
                <a class='chats__profile' href='../../profile.html'>Профиль &gt;</a>
                ${input('search', 'text', '&#128269;&nbsp;Поиск ')}
                ${chatsList(dataChats)}
            </div>
            <div class='chats__item'>
                <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
            </div>
        </section>
    `
}