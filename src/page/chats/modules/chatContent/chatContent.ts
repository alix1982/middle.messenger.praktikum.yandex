import { block } from '../../../../modules/block/block';
import { IDataChatApi } from '../../../../utils/constant';

chatContent.prototype.block = block as ()=>void;

export function chatContent( id: number, dataMessege: IDataChatApi) {
  console.log(id)
  return `
    <header class='chatContent__header' id='chatContent__header'>
      <article class='chatContent__user'>
        <img class='chatContent__avatar' src=${dataMessege?.avatar} alt='аватар'/>
        <p class='chatContent__heading'>${dataMessege?.title}</p>
      </article>

    </header>
    <article class='chatConten__users'>
      <h3 class='chatConten__userPointHeading'>
        Пользователи в чате:
      </h3>
      <ul class='chatContent__listUsers' id='chatContent__listUsers'>

      </ul>
    </article>
    <ul class='chatContent__messages' id='chatContent__messages'>

    </ul>
    <footer class='chatContent__footer' id='chatContent__footer'>

    </footer>
  `
}
