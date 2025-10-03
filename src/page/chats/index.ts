import { chats } from './chats'
import { button } from '../../modules/button/button'
import { input } from '../../modules/input/input'
import chatsList from './modules/chatsList/chatsList'
import { validationMessege } from '../../utils/validation'
import { chatFormSearch } from './modules/chatFormSearch/chatFormSearch'
import { chatPoint } from './modules/chatPoint/chatPoint'
import { chatPointButton } from './modules/chatPoint/chatPointButton/chatPointButton'
import { navigate } from '../../utils/routing/navigate'
import { apiMessageChats, apiMessageCreateChat } from '../../api/apiRequestMessage'
import { IDataChatApi } from '../../utils/constant'
import { openMessege } from './chatsHelper'

export function chatsHtml() {
  let inputCreateChatValue = '';
  let dataChats = [{}];

  // кнопка редиректа в профиль
  const propsButton = ['profileButton', 'Профиль &gt; ', true]
  const propsEventButton = {
    click: handleTransitionProfile,
  }
  function handleTransitionProfile() {
    navigate('settings');
  }

  // пропсы формы поиска и добавления чатов
  const propsFormSearch = ['chats_searchForm', true]
  const propsEventFormSearch = {
    submit: async function  handleSubmitSearch(e: Event) {
                e.preventDefault();
                // console.log(inputSearchValue)
                console.log(inputCreateChatValue)
                await apiMessageCreateChat({title: inputCreateChatValue});
                console.log('ok');
                await renderButtonPoint();
            },
  }

  // // инпут поиска
  // const propsInputSearch = ['search', 'text', '&#128269;&nbsp;Поиск ', true]
  // const propsEventInputSearch = {
  //   input: function handleChangeSearch(e: Event) {
  //     e.preventDefault();
  //     inputSearchValue = (e.target as HTMLInputElement).value
  //     // console.log(inputSearchValue)
  //   },
  //   // blur: 'Неверный логин',
  //   // submit: function  handleSubmitSearch(e: Event) {
  //   //             e.preventDefault();
  //   //             console.log(inputSearchValue)
  //   //         },
  // }

  // пропсы инпута добавления чата
  const propsInputCreateChat = ['createChat', 'text', '+&nbsp;добавить&nbsp;чат ', true]
  const propsEventInputCreateChat = {
    input: function handleChangeCreateChat(e: Event) {
      e.preventDefault();
      inputCreateChatValue = (e.target as HTMLInputElement).value
      // console.log(inputCreateChatValue)
    },
    blur: function handleChangeCreateChat(e: Event) {

      const element = e.target as HTMLInputElement
      const isValidate = validationMessege(element.value)
            !isValidate
              ? element?.classList.add('input__error')
              : element?.classList.remove('input__error')
    },
  }
  // блок со списком чатов
  const propsChatsList = ['chatsListMessege', [], true];

  // рендер шаблона страницы
  chats.prototype.block('#app', [], {});

  // рендер кнопки перехода в профиль
  button.prototype.block('#chats__list', propsButton, propsEventButton, {}, 'afterbegin');

  // рендер формы поиска и добавления чата
  chatFormSearch.prototype.block('#chats__list', propsFormSearch, propsEventFormSearch)
  // input.prototype.block('#chats_searchForm', propsInputSearch, propsEventInputSearch)
  input.prototype.block('#chats_searchForm', propsInputCreateChat, propsEventInputCreateChat)

  // рендер блока со списком чатов
  chatsList.prototype.block('#chats__list', propsChatsList, {})

  async function renderButtonPoint() {
    // console.log('renderButtonPoint')
    await apiMessageChats()
      .then((res) => {
        // console.log(res);
        dataChats = res as [{id: number}]
      })
    ;
    console.log(dataChats)

    dataChats.length > 0 &&
      (dataChats.forEach((item:IDataChatApi, index: number) => {
        console.log(item)
        // пропсы пункта (чата) в блоке списка чатов
        const propsChatPoint = [`chatPoint${item.id}`, index === 0 ? false : true];

        // пропсы кнопки пункта (чата) в блоке списка чатов
        const propsChatPointButton = [`chatPointButton${item.id}`, item, true]
        const propsEventChatPointButton = {
          click: (e:Event) => {
            const elementButtonClick = document.querySelector(
              `#chatPointButton${item.id}`
            ) as HTMLButtonElement;
            openMessege(e, elementButtonClick, item)
          }
        }
        //рендер пункта (чата) в блоке списка чатов списка чатов
        chatPoint.prototype.block('#chatsListMessege', propsChatPoint, {})
        // рендер кнопки пункта (чата) в блоке списка чатов
        chatPointButton.prototype.block(
          `#chatPoint${item.id}`, propsChatPointButton, propsEventChatPointButton
        )
      }))
  }
  renderButtonPoint()
}
