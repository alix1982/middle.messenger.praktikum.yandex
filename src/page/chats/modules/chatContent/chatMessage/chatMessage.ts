// interface IChatMessege {
//     content: string,
//     time: number,
//     user_id: number

import { IMesseges } from "../../../../../utils/constant";

// }
export function chatMessage({content, time, user_id, is_read}: IMesseges) {
  const myMessege = user_id === JSON.parse(localStorage.getItem('dataUser') as string).id ?
    true : false;
  return `
    <li class=${myMessege ? 'chatMessage__my' : 'chatMessage__companion'}>
      <p class='chatMessage__text'>${content}</p>
      <p class='chatMessage__info'>
        <span class=${is_read ? 'chatMessage__read' : 'chatMessage__noRead'}></span>
        <span class='chatMessage__time'>
          ${new Date(time).getHours()}:
          ${new Date(time).getMinutes()}
        </span>
      </p>
    </li>
  `
}
