import { block } from "../../../../../modules/block/block";
import { IDataChatApi } from "../../../../../utils/constant";

chatPointButton.prototype.block = block as ()=>void;

export function chatPointButton(
  id: string, { title, last_message, avatar, unread_count }: IDataChatApi
) {
  let hour = '--';
  let minute = '--';
  if (last_message !== null && last_message?.time) {
    hour = String(new Date(last_message?.time).getHours());
    minute = String(new Date(last_message?.time).getMinutes());
    hour.length <= 1 ? (hour = '0' + hour) : hour;
    minute.length <= 1 ? (minute = '0' + minute) : minute;
  }

  return `
    <button class='chatPoint__button' id=${id} type='button'>
      <img class='chatPoint__avatar' src=${avatar} alt='аватар'/>
      <article class='chatPoint__main'>
        <p class='chatPoint__heading'>
          ${title}
        </p>
        <p class='chatPoint__content'>
          ${last_message === null ? 'пусто' : last_message?.content}
        </p>
      </article>
      <article class='chatPoint__info'>
        <p class='chatPoint__time'>${hour + ':' + minute}</p>
        <p
          class=${unread_count === 0 ?
              'chatPoint__countMesNotRead_noActiv' :
              'chatPoint__countMesNotRead'}
        >
          ${unread_count}
        </p>
      </article>
      <div class='chatPoint__scroll'></div>
    </button>
  `
}
