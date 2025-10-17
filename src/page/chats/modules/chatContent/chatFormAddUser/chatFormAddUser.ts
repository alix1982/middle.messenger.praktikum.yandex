import { block } from "../../../../../modules/block/block";

chatFormAddUser.prototype.block = block as ()=>void;

export function chatFormAddUser() {

  return `
    <form class='chats__addUserForm' id='chats__addUserForm'>

    </form>
  `
}
