import { block } from "../../../../../modules/block/block";
import { IMesseges, transformMonth } from "../../../../../utils/constant";
import { chatMessage } from "../chatMessage/chatMessage";

chatMessages.prototype.block = block as ()=>void;

// export function chatContent( id:string, chat: [IDataChat]) {
export function chatMessages( id:number, messages: [] ) {

  const messagesSort = (messages as IMesseges[]).sort(
    (a: IMesseges, b: IMesseges) =>
      Math.floor(new Date(a.time).getTime()) - Math.floor(new Date(b.time).getTime())
  )

  let renderMesseges = ''
  let dateMessages = 0
  let monthMessages = -1
  messagesSort.map((messege: IMesseges) => {
    const date = new Date(messege.time).getDate()
    const month = new Date(messege.time).getMonth()
    if (month !== monthMessages || date !== dateMessages) {
      monthMessages = month
      dateMessages = date

      renderMesseges +=
        `<li class='chatContent__messagesTime'>${dateMessages}
          ${transformMonth[monthMessages]}</li>`
    }

    if (messege?.type === 'message') {
      return renderMesseges += chatMessage(messege)
    }
  })

  return `
      ${renderMesseges}
  `
}
