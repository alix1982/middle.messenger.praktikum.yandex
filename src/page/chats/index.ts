// import Handlebars from "handlebars";
import { chats } from './chats'
import { dataChats, IDataChat } from '../../utils/constant'
import { chatContent } from './modules/chatContent/chatContent'
import { render, renderContentHandlebars, setPageRender } from '../../index'
import { button } from '../../modules/button/button'
import { input } from '../../modules/input/input'
import chatsList from './modules/chatsList/chatsList'

export function chatsHtml() {
  let idChatSelected = ''
  let inputSearchValue = ''
  let inputMessegeValue = ''
  interface IButtonElement extends NamedNodeMap {
    id: {
      value: string
    }
  }

  const propsButton = ['profileButton', 'Профиль &gt; ']
  const propsEventButton = {
    click: handleTransitionProfile,
  }
  function handleTransitionProfile() {
    setPageRender('profile')
    render()
  }

  const propsInputSearch = ['search', 'text', '&#128269;&nbsp;Поиск ']
  const propsEventInputSearch = {
    input: function handleChangeSearch(e: Event) {
      e.preventDefault()
      inputSearchValue = (e.target as HTMLInputElement).value
      // console.log(inputSearchValue)
    },
    // blur: 'Неверный логин',
    // submit: function  handleSubmitSearch(e: Event) {
    //             e.preventDefault();
    //             console.log(inputSearchValue)
    //         },
  }

  const propsChatsList = ['chatList', dataChats]
  // const propsEventChatList = {
  //     click: handleChangeChat,
  // }
  // function handleChangeChat() {
  //     console.log('выбор чата')
  //     // console.log(event.target)

  //     // setPageRender('profile');
  //     // render();
  // }

  function openMessege(e: Event, item: HTMLButtonElement) {
    idChatSelected = (item.attributes as IButtonElement).id.value
    const chat = dataChats.find(
      (el: IDataChat) => Number(el.idChat) === Number(idChatSelected)
    ) as IDataChat

    renderContentHandlebars('.chats__item', chatContent(chat))

    const inputMessege = document.querySelector('#message') as HTMLButtonElement
    const formMessege = document.querySelector('.chatContent__control') as HTMLButtonElement
    const buttonSubmitMessege = document.querySelector(
      '.chatContent__controlButton'
    ) as HTMLButtonElement

    inputMessege.addEventListener('input', handleChangeMessege)
    function handleChangeMessege(e: Event) {
      e.preventDefault()
      inputMessegeValue = (e.target as HTMLInputElement).value
      // console.log(inputMessegeValue)
    }
    buttonSubmitMessege.addEventListener('submit', submitMessegeForm)
    formMessege.addEventListener('submit', submitMessegeForm)
    function submitMessegeForm(e: Event) {
      e.preventDefault()
      inputMessegeValue.length >= 1 && console.log(inputMessegeValue)
    }
  }

  // let renderContent = '';

  // const propsChatsListPoint = ['chatList', dataChats]
  // const propsEventChatListPoint = {
  //     click: handleChangeChat,
  // }
  // function handleChangeChat() {
  //     console.log('выбор чата')
  //     // console.log(event.target)

  //     // setPageRender('profile');
  //     // render();
  // }

  // renderContentHandlebars('#app', chats(dataChats));
  chats.prototype.block('#app', [], {})
  button.prototype.block('#chats__list', propsButton, propsEventButton, {}, 'afterbegin')
  input.prototype.block('#chats_searchForm', propsInputSearch, propsEventInputSearch)

  chatsList.prototype.block('#chats__list', propsChatsList, {})

  const formSearch = document.querySelector('#chats_searchForm') as HTMLButtonElement
  formSearch.addEventListener('submit', submitSearchForm)
  function submitSearchForm(e: Event) {
    e.preventDefault()
    console.log(inputSearchValue)
  }

  const arrChatsElements = document.querySelectorAll('.chatPoint__button')
  arrChatsElements.forEach((item: HTMLButtonElement) =>
    item.addEventListener('click', (e) => {
      openMessege(e, item)
    })
  )

  // const profileButton = document.querySelector('#profileButton') as HTMLButtonElement;
  // profileButton.addEventListener('click', () => {
  //     setPageRender('profile');
  //     render();
  // })
}

