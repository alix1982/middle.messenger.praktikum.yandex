import Handlebars from "handlebars";
import chats from "./chats";
import { dataChats } from "../../utils/constant";
import { chatContent } from "./modules/chatContent/chatContent";
import { render, renderContentHandlebars, setPageRender } from "../..";

export function chatsHtml() {
    let idChatSelected = 0;

    function click(e, item) {
        idChatSelected = item.attributes.id.value;
        let chat = dataChats.find((el) => Number(el.idChat) === Number(idChatSelected));

        renderContentHandlebars('.chats__item', chatContent(idChatSelected, chat))
        // const chatContentElement = document.querySelector('.chats__item');
        // const template = Handlebars.compile(chatContent(idChatSelected, chat));
        // const result = template();
        // chatContentElement.innerHTML = result;
    }

    // document.addEventListener('DOMContentLoaded', () => {
        renderContentHandlebars('#app', chats(dataChats, idChatSelected))
        // const rootChats = document.querySelector('#app');
        // const template = Handlebars.compile(chats(dataChats, idChatSelected));
        // const result = template({});
        // rootChats.innerHTML = result;

        const arrChatsElements = document.querySelectorAll('.chatPoint__button');
        const profileButton = document.querySelector('#profileButton');

        arrChatsElements.forEach((item) => item.addEventListener('click', (e) => {click(e, item)}));
        profileButton.addEventListener('click', () => {
            setPageRender('profile');
            render();
        })
    // });
}
