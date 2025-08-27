import button from "../../modules/button/button";
import input from "../../modules/input/input";
import chatsList from "./modules/chatsList/chatsList";

export default function (dataChats, idChatSelected) {
    return `
         <section class='chats'>
            <div class='chats__list'>
                ${button('Профиль &gt;', 'profileButton')}
                ${input('search', 'text', '&#128269;&nbsp;Поиск ')}
                ${chatsList(dataChats)}
            </div>
            <div class='chats__item'>
                <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
            </div>
        </section>
    `
}

// export default function (dataChats, idChatSelected) {
//     // console.log(idChatSelected)
//     return `
//          <section class='chats'>
//             <div class='chats__list'>
//                 <a class='chats__profile' href='../../profile.html'>Профиль &gt;</a>
//                 ${input('search', 'text', '&#128269;&nbsp;Поиск ')}
//                 ${chatsList(dataChats)}
//             </div>
//             <div class='chats__item'>
//                 <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
//             </div>
//         </section>
//     `
// }
