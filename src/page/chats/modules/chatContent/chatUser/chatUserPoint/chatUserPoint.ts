import { block } from "../../../../../../modules/block/block";
import {
  // IDataUserActive,
  IDataUsersChat
} from "../../../../../../utils/constant";

chatUsersPoint.prototype.block = block as ()=>void;

export function chatUsersPoint( idButton:number, user: IDataUsersChat, idUserAdmin: number ) {
  // console.log(user)
  function validDeleteUser() {
    let idUserActiv = (JSON.parse(localStorage.getItem('dataUser') as string)).id
    let isValid = (user.role !== 'admin' && idUserActiv === idUserAdmin);
    return isValid
  }

  return `
      <li class='chat__userPoint'>
        <p class='chat__userName'>${user.first_name}</p>
        ${validDeleteUser() ?
          `<button class='chat__button' id=${idButton} type='button'>
            &times;
          </button>` :
          ``
        }
      </li>
    `
}
