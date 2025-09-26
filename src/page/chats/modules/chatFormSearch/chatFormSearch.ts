import { block } from "../../../../modules/block/block";

chatFormSearch.prototype.block = block as ()=>void;

export function chatFormSearch() {

  return `
    <form id='chats_searchForm'>

    </form>
  `
}
