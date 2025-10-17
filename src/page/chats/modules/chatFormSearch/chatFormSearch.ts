import { block } from "../../../../modules/block/block";

chatFormSearch.prototype.block = block as ()=>void;

export function chatFormSearch() {

  return `
    <form class='chats__searchForm' id='chats__searchForm'>

    </form>
  `
}
