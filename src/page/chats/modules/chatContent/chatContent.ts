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
    <ul class='chatContent__messages' id='chatContent__messages'>

    </ul>
    <footer class='chatContent__footer' id='chatContent__footer'>

    </footer>
  `
}
