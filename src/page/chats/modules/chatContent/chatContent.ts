import { block } from '../../../../modules/block/block';
// import { input } from '../../../../modules/input/input'
import { IDataChat, IMesseges, transformMonth } from '../../../../utils/constant'
import { chatMessage } from './chatMessage/chatMessage'

chatContent.prototype.block = block as ()=>void;

export function chatContent( id:string, chat: [IDataChat]) {
  console.log(id)
  const { name, messeges, avatarUser }: IDataChat = chat[0]
  const messagesSort = (messeges as IMesseges[]).sort(
    (a: IMesseges, b: IMesseges) => a.dateUnix - b.dateUnix
  )

  let renderMesseges = ''
  let dateMessages = 0
  let monthMessages = -1
  messagesSort.map((messege: IMesseges) => {
    const date = new Date(messege.dateUnix * 1000).getDate()
    const month = new Date(messege.dateUnix * 1000).getMonth()

    if (month !== monthMessages || date !== dateMessages) {
      monthMessages = month
      dateMessages = date

      renderMesseges +=
        `<li class='chatContent__contentTime'>${dateMessages}
          ${transformMonth[monthMessages]}</li>`
    }

    return (renderMesseges += chatMessage(messege))
  })

  return `
    <header class='chatContent__header'>
      <article class='chatContent__user'>
        <img class='chatContent__avatar' src=${avatarUser} alt='аватар'/>
        <p class='chatContent__heading'>${name}</p>
      </article>
      <button class='chatContent__menu' type='button'>
      </button>
    </header>
    <ul class='chatContent__content'>
      ${renderMesseges}
    </ul>
    <footer>
      <form class='chatContent__control' id='chatContent__control'>

      </form>
    </footer>
  `
}

// ${input('message', 'text', 'Сообщение ')}
// <button class='chatContent__controlButton' type='submit'></button>
