import {
  apiMessageAddUser,
  apiMessageGetToken,
  apiMessageUserDelete,
  apiMessageUSersChat
} from "../../api/apiRequestMessage";
import { button } from "../../modules/button/button";
import { input } from "../../modules/input/input";
import { IDataChatApi, IDataUsersChat } from "../../utils/constant";
import { validationId, validationMessege } from "../../utils/validation";
import { chatContent } from "./modules/chatContent/chatContent";
import { chatFormAddUser } from "./modules/chatContent/chatFormAddUser/chatFormAddUser";
import { chatFormControl } from "./modules/chatContent/chatFormControl/chatFormControl";
import { chatMessages } from "./modules/chatContent/chatMessages/chatMessages";
// import { chatUsers } from "./modules/chatContent/chatUser/chatUser";
import { chatUsersPoint } from "./modules/chatContent/chatUser/chatUserPoint/chatUserPoint";

let userId = JSON.parse(localStorage.getItem('dataUser') as string)?.id;
let idChatSelected = '';
let idChat = 0;
// let inputSearchValue = '';
// let inputCreateChatValue = '';
let inputAddUserValue = 0;
let inputMessegeValue = '';
let isValidAddUser = false;
let isValidMessage = false;
let usersChat:IDataUsersChat[] = [];

function validFormAddUser() {
  const buttonSubmitElement = document.querySelector('#buttonAddUser') as HTMLButtonElement;
  isValidAddUser = validationId(inputAddUserValue);
  buttonSubmitElement.disabled = !(isValidAddUser);
  return isValidAddUser;
}
function validFormMessage() {
  const buttonSubmitElement = document.querySelector('#messageButton') as HTMLButtonElement;
  isValidMessage = validationMessege(inputMessegeValue);
  buttonSubmitElement.disabled = !(isValidMessage);
  return isValidMessage;
}
// let dataChats = [{}];

interface IButtonElement extends NamedNodeMap {
  id: {
    value: string
  }
}
let socketStatus:string = 'close';
let chatMessagesWS:[{}] = [{}];

export async function openMessege(e: Event, item: HTMLButtonElement, dataMessege:IDataChatApi) {
  idChatSelected = (item.attributes as IButtonElement).id.value;
  idChat = Number(idChatSelected.slice(15));

  renderUsers();

  // пропсы блока контента конкретного чата
  // ??? (id chatList нигде не используется и не фигурирует, просто опционально)
  const propsChatsContent = ['chatList', dataMessege];

  // пропсы формы добавления пользователя в чат
  const propsFormAddUser = ['chats__addUserForm', true]
  const propsEventFormAddUser = {
    submit: async function  handleSubmitAddUser(e: Event) {
                e.preventDefault();
                console.log('submit form')
                if (isValidAddUser) {
                  await apiMessageAddUser(Number(inputAddUserValue), idChat)
                  const htmlTarget = e.target as HTMLFormElement;
                  const input = htmlTarget.elements[0] as HTMLFormElement
                  input.value = '';
                  inputAddUserValue = 0;
                  validFormAddUser();
                  renderUsers();
                }
            },
  }

  // пропсы кнопки отправки сообщения
  const propsButtonAddUser = ['buttonAddUser', '', 'submit', !isValidAddUser, true]
  // const propsEventButtonAddUser = {
  //   click: handleSubmitAddUser,
  // }
  // async function handleSubmitAddUser(e: Event) {
  //   e.preventDefault();
  //   console.log('click button')
  //   if (isValidAddUser) {
  //     await apiMessageAddUser(Number(inputAddUserValue), idChat)
  //     const htmlTarget = e.target as HTMLFormElement;
  //     const input = htmlTarget.elements[0] as HTMLFormElement
  //     input.value = '';
  //     inputAddUserValue = '';
  //     renderUsers();
  //   }
  // }

  // пропсы инпута добавления пользователя в чат
  const propsInputAddUser = ['inputAddUser', 'number', 'ID ', true]
  const propsEventInputAddUser = {
    input: function handleChangeMessage(e: Event) {
      e.preventDefault();
      const element = e.target as HTMLInputElement;
      inputAddUserValue = Number(element.value);
      validFormAddUser();
      !isValidAddUser
        ? element?.classList.add('input__error')
        : element?.classList.remove('input__error')
      // console.log(inputAddUserValue)
    },
    blur: function handleBlurMessage(e: Event) {
          e.preventDefault();
          validFormAddUser()
          const element = e.target as HTMLInputElement
          // const errElement = element.nextElementSibling
          // const isValidate = validationLogin(element.value)
          !isValidAddUser
            ? element?.classList.add('input__error')
            : element?.classList.remove('input__error')
    },
  }

  // // пропсы списка пользователей в конкретном чате
  // const propsListUsers = ['chats__listUsers', true]

  // пропсы формы отправки сообщений
  // !!! не нужно !!!
  const propsFormControl = ['chat__controlForm', true]
  const propsEventFormControl = {
    submit: function  handleSubmitControl(e: Event) {
                e.preventDefault();
                // console.log(inputSearchValue)
                console.log(inputMessegeValue)
            },
  }

  // рендер блока со списком сообщений (переписка в конткретном чате)
  chatContent.prototype.block('#chats__item', propsChatsContent, {});

  // рендер формы добавления пользователя
  chatFormAddUser.prototype.block(
    '#chatContent__header', propsFormAddUser, propsEventFormAddUser
  )
  input.prototype.block('#chats__addUserForm', propsInputAddUser, propsEventInputAddUser)
  button.prototype.block('#chats__addUserForm', propsButtonAddUser, {})

  // // рендер блока со списком пользователей конкретного чата
  // chatUsers.prototype.block('#chatContent__listUsers', propsListUsers, {});

  // рендер формы отпраки сообщений
  chatFormControl.prototype.block(
    '#chatContent__footer', propsFormControl, propsEventFormControl
  )

  _setToken(idChat)
}

function _setToken(id: number) {
  chatMessagesWS = [{}];
  apiMessageGetToken(id)
    .then((token) => {
      const socket = new WebSocket(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`
      );
      socket.addEventListener('open', () => {
        console.log('Соединение установлено');
        socketStatus = 'open';
        socket.send(JSON.stringify({
          content: '0',
          type: 'get old',
        }));
        // socket.send(JSON.stringify({
        //   content: 'Моё первое сообщение миру!',
        //   type: 'message',
        // }));
      });

      socket.addEventListener('close', event => {
        if (event.wasClean) {
          // console.log('Соединение закрыто чисто');
          socketStatus = 'close';
        } else {
          // console.log('Обрыв соединения');
          socketStatus = 'close';
          _setToken(idChat)
        }

        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      });

      socket.addEventListener('message', event => {
        // socketStatus = 'message';
        // console.log('Получены данные: ', event.data);
        const data = JSON.parse(event.data) as {} | [];
        Array.isArray(data) ?
          (chatMessagesWS = data as [{}]) :
          chatMessagesWS.push(JSON.parse(event.data) as {});

        // пропсы списка сообщений
        const propsListMessages = ['listMessages', chatMessagesWS]
        chatMessages.prototype.block('#chatContent__messages', propsListMessages, {});
      });

      socket.addEventListener('error', event => {
        // console.log('Ошибка', event?.message);
        console.log('Ошибка: ', event);
        socketStatus = 'error';
        _setToken(idChat)
      });

      // пропсы кнопки отправки сообщения
      const propsButtonMessage = ['messageButton', '', 'submit', !isValidMessage, true]
      const propsEventButtonMessage = {
        click: handleSubmitMessage,
      }
      function handleSubmitMessage(e: Event) {
        e.preventDefault();
        if (socketStatus === 'open' && isValidMessage) {
          socketStatus === 'open' &&
            socket.send(JSON.stringify({
              content: inputMessegeValue,
              type: 'message',
            }));
          const htmlTarget = e.target as HTMLFormElement;
          const input = htmlTarget.form[0] as HTMLFormElement
          input.value = '';
          inputMessegeValue = '';
          validFormMessage();
        }
      }

      // пропсы инпута отпраки сообщения
      const propsInputMessage = ['message', 'text', 'Сообщение ']
      const propsEventInputMessage = {
        input: function handleChangeMessage(e: Event) {
          e.preventDefault();
          const element = e.target as HTMLInputElement;
          inputMessegeValue = element.value;
          validFormMessage();
          !isValidMessage
            ? element?.classList.add('input__error')
            : element?.classList.remove('input__error')
        },
        blur: function handleBlurMessage(e: Event) {
              e.preventDefault();
              validFormMessage();
              const element = e.target as HTMLInputElement;
              !isValidMessage
                ? element?.classList.add('input__error')
                : element?.classList.remove('input__error')
        },
      }

      input.prototype.block('#chat__controlForm', propsInputMessage, propsEventInputMessage)
      button.prototype.block('#chat__controlForm', propsButtonMessage, propsEventButtonMessage)
    })
}

async function renderUsers() {
  const contenBlockUsers =
    document.querySelector('#chatContent__listUsers') as HTMLElement;
  if (contenBlockUsers) {
    const elements = contenBlockUsers.querySelectorAll(".chat__userPoint");
    elements.forEach(el => {
      el.remove();
    });
  }
  usersChat = await apiMessageUSersChat(idChat) as [];
  let idUserAdmin = (usersChat.find((user) => user.role === 'admin') as IDataUsersChat).id

  usersChat.length > 0 &&
    (usersChat.forEach((item:IDataUsersChat) => {
      // // console.log(item)
      // // пропсы пункта (чата) в блоке списка чатов
      // const propsChatPoint = [`chatPoint${item.id}`, index === 0 ? false : true];

      // пропсы кнопки пункта (чата) в блоке списка чатов
      const propsUserPointButton = [`chatUser${item.id}`, item, idUserAdmin, true]
      const propsEventUserPointButton = {
        click: async (e:Event) => {
          console.log(e)
          await apiMessageUserDelete(item.id, idChat);
          renderUsers();
          // const elementButtonClick = document.querySelector(
          //   `#chatPointButton${item.id}`
          // ) as HTMLButtonElement;
          // openMessege(e, elementButtonClick, item)
        }
      }
      //рендер пункта (чата) в блоке списка чатов списка чатов
      // chatPoint.prototype.block('#chatsListMessege', propsChatPoint, {})
      // рендер кнопки пункта (чата) в блоке списка чатов
      chatUsersPoint.prototype.block(
        `#chatContent__listUsers`, propsUserPointButton, propsEventUserPointButton
      )
    }))
}
