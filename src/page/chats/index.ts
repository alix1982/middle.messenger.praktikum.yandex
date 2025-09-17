// import Handlebars from "handlebars";
import { chats } from './chats'
import { dataChats, IDataChat } from '../../utils/constant'
import { chatContent } from './modules/chatContent/chatContent'
import { render, setPageRender } from '../../index'
import { button } from '../../modules/button/button'
import { input } from '../../modules/input/input'
import chatsList from './modules/chatsList/chatsList'
import { validationMessege } from '../../utils/validation'
import { chatFormSearch } from './modules/chatFormSearch/chatFormSearch'
import { chatPoint } from './modules/chatPoint/chatPoint'
import { chatPointButton } from './modules/chatPoint/chatPointButton/chatPointButton'

export function chatsHtml() {

  let idChatSelected = '';
  let inputSearchValue = '';
  let inputMessegeValue = '';
  interface IButtonElement extends NamedNodeMap {
    id: {
      value: string
    }
  }

  const propsButton = ['profileButton', 'Профиль &gt; ', true]
  const propsEventButton = {
    click: handleTransitionProfile,
  }
  function handleTransitionProfile() {
    setPageRender('profile')
    render()
  }

  const propsFormSearch = ['chats_searchForm', true]
  const propsEventFormSearch = {
    submit: function  handleSubmitSearch(e: Event) {
                e.preventDefault();
                console.log(inputSearchValue)
            },
  }

  const propsInputSearch = ['search', 'text', '&#128269;&nbsp;Поиск ', true]
  const propsEventInputSearch = {
    input: function handleChangeSearch(e: Event) {
      e.preventDefault();
      inputSearchValue = (e.target as HTMLInputElement).value
      // console.log(inputSearchValue)
    },
    // blur: 'Неверный логин',
    // submit: function  handleSubmitSearch(e: Event) {
    //             e.preventDefault();
    //             console.log(inputSearchValue)
    //         },
  }

  const propsChatsList = ['chatsListMessege', dataChats, true];

  function openMessege(e: Event, item: HTMLButtonElement) {

    idChatSelected = (item.attributes as IButtonElement).id.value
    const chat = dataChats.find(
      (el: IDataChat) => String(`chatPointButton${el.idChat}`) === String(idChatSelected)
    ) as IDataChat

    const propsChatsContent = ['chatList', [chat]];

    const propsButtonMessage = ['messageButton', '', 'submit', true]
    const propsEventButtonMessage = {
      click: handleSubmitMessage,
    }
    function handleSubmitMessage(e: Event) {
      e.preventDefault();
      // inputMessegeValue = (e.target as HTMLInputElement).value
      console.log(inputMessegeValue);
    }

    const propsInputMessage = ['message', 'text', 'Сообщение ', true]
    const propsEventInputMessage = {
      input: function handleChangeMessage(e: Event) {
        e.preventDefault()
        inputMessegeValue = (e.target as HTMLInputElement).value
        // console.log(inputSearchValue)
      },
      blur: function handleBlurPass(e: Event) {
            e.preventDefault()
            const element = e.target as HTMLInputElement
            // const errElement = element.nextElementSibling
            const isValidate = validationMessege(element.value)
            !isValidate
              ? element?.classList.add('input__error')
              : element?.classList.remove('input__error')
      },
      // submit: function  handleSubmitSearch(e: Event) {
      //             e.preventDefault();
      //             console.log(inputSearchValue)
      //         },
    }

    chatContent.prototype.block('#chats__item', propsChatsContent, {});
    input.prototype.block('#chatContent__control', propsInputMessage, propsEventInputMessage)
    button.prototype.block('#chatContent__control', propsButtonMessage, propsEventButtonMessage)

    document.querySelector('#messageButton')?.classList.add('chatContent__controlButton')
  }

  chats.prototype.block('#app', [], {})
  button.prototype.block('#chats__list', propsButton, propsEventButton, {}, 'afterbegin')
  chatFormSearch.prototype.block('#chats__list', propsFormSearch, propsEventFormSearch)
  input.prototype.block('#chats_searchForm', propsInputSearch, propsEventInputSearch)

  chatsList.prototype.block('#chats__list', propsChatsList, {})

  function setEventButtonPoint() {
    dataChats.forEach((item) => {
      const propsChatPoint = [`chatPoint${item.idChat}`, true]
      const propsChatPointButton = [`chatPointButton${item.idChat}`, item, true]
      const propsEventChatPointButton = {
        click: (e:Event) => {
          const elementButtonClick = document.querySelector(
            `#chatPointButton${item.idChat}`
          ) as HTMLButtonElement;
          openMessege(e, elementButtonClick)
        }
      }

      chatPoint.prototype.block('#chatsListMessege', propsChatPoint, {})
      chatPointButton.prototype.block(
        `#chatPoint${item.idChat}`, propsChatPointButton, propsEventChatPointButton
      )

    })
  }
  setEventButtonPoint()
}
