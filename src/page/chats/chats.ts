import { block } from "../../modules/block/block";
import {button} from "../../modules/button/button";
import {input} from "../../modules/input/input";
import { IDataChat } from "../../utils/constant";
import chatsList from "./modules/chatsList/chatsList";

chats.prototype.block = block as ()=>void;

export function chats(dataChats: IDataChat[]) {
    return `
         <main class='chats'>
            <section class='chats__list' id='chats__list'>

                <form id='chats_searchForm'>

                </form>

            </section>
            <section class='chats__item'>
                <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
            </section>
        </main>
    `
}

// ${button('Профиль &gt;', 'profileButton')}
// ${input('search', 'text', '&#128269;&nbsp;Поиск ')}
// ${chatsList(dataChats)}


