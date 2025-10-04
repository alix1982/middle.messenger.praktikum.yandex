import { apiMessageAddUser, apiMessageGetToken } from "../../api/apiRequestMessage";
import { button } from "../../modules/button/button";
import { input } from "../../modules/input/input";
import { IDataChatApi } from "../../utils/constant";
import { validationLogin, validationMessege } from "../../utils/validation";
import { chatContent } from "./modules/chatContent/chatContent";
import { chatFormAddUser } from "./modules/chatContent/chatFormAddUser/chatFormAddUser";
import { chatFormControl } from "./modules/chatContent/chatFormControl/chatFormControl";
import { chatMessages } from "./modules/chatContent/chatMessages/chatMessages";

let userId = JSON.parse(localStorage.getItem('dataUser') as string)?.id;
let idChatSelected = '';
let idChat = 0;
// let inputSearchValue = '';
// let inputCreateChatValue = '';
let inputAddUserValue = '';
let inputMessegeValue = '';
// let dataChats = [{}];

interface IButtonElement extends NamedNodeMap {
  id: {
    value: string
  }
}
let socketStatus:string = 'close';
let chatMessagesWS:[{}] = [{}];

export function openMessege(e: Event, item: HTMLButtonElement, dataMessege:IDataChatApi) {
  idChatSelected = (item.attributes as IButtonElement).id.value;
  idChat = Number(idChatSelected.slice(15));

  // пропсы блока контента конкретного чата
  // ??? (id chatList нигде не используется и не фигурирует, просто опционально)
  const propsChatsContent = ['chatList', dataMessege];

  // пропсы формы добавления пользователя в чат
  const propsFormAddUser = ['chats__addUserForm', true]
  const propsEventFormAddUser = {
    submit: function  handleSubmitAddUser(e: Event) {
                e.preventDefault();
                // console.log(inputSearchValue)
                apiMessageAddUser(Number(inputAddUserValue), idChat)
                const htmlTarget = e.target as HTMLFormElement;
                const input = htmlTarget[0] as HTMLFormElement
                input.value = '';
                inputAddUserValue = '';
            },
  }

  // пропсы инпута добавления пользователя в чат
  const propsInputAddUser = ['addUser', 'text', 'ID ', true]
  const propsEventInputAddUser = {
    input: function handleChangeMessage(e: Event) {
      e.preventDefault()
      inputAddUserValue = (e.target as HTMLInputElement).value
      console.log(inputAddUserValue)
    },
    blur: function handleBlurMessage(e: Event) {
          e.preventDefault()
          const element = e.target as HTMLInputElement
          // const errElement = element.nextElementSibling
          const isValidate = validationLogin(element.value)
          !isValidate
            ? element?.classList.add('input__error')
            : element?.classList.remove('input__error')
    },
  }

  // пропсы формы отправки сообщений
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

  // рендер формы создания чата
  chatFormAddUser.prototype.block(
    '#chatContent__header', propsFormAddUser, propsEventFormAddUser
  )
  input.prototype.block('#chats__addUserForm', propsInputAddUser, propsEventInputAddUser)

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
      const propsButtonMessage = ['messageButton', '', 'submit', true]
      const propsEventButtonMessage = {
        click: handleSubmitMessage,
      }
      function handleSubmitMessage(e: Event) {
        e.preventDefault();
        socketStatus === 'open' &&
          socket.send(JSON.stringify({
            content: inputMessegeValue,
            type: 'message',
          }));
          const htmlTarget = e.target as HTMLFormElement;
          const input = htmlTarget.form[0] as HTMLFormElement
          input.value = '';
          inputMessegeValue = '';
        // inputMessegeValue = (e.target as HTMLInputElement).value
        // console.log(inputMessegeValue);

      }

      // пропсы инпута отпраки сообщения
      const propsInputMessage = ['message', 'text', 'Сообщение ']
      const propsEventInputMessage = {
        input: function handleChangeMessage(e: Event) {
          e.preventDefault()
          inputMessegeValue = (e.target as HTMLInputElement).value
          console.log(inputMessegeValue)
        },
        blur: function handleBlurMessage(e: Event) {
              e.preventDefault()
              const element = e.target as HTMLInputElement
              // const errElement = element.nextElementSibling
              const isValidate = validationMessege(element.value)
              !isValidate
                ? element?.classList.add('input__error')
                : element?.classList.remove('input__error')
        },
      }

      input.prototype.block('#chat__controlForm', propsInputMessage, propsEventInputMessage)
      button.prototype.block('#chat__controlForm', propsButtonMessage, propsEventButtonMessage)
    })
}
