// import { userData } from "../../utils/constant";
import avatarDefault from '../../../static/img/avatarDefault.svg';
import { block } from "../../modules/block/block";

profile.prototype.block = block as () => void

export function profile() {

    const avatar = localStorage.getItem('avatar') ? localStorage.getItem('avatar') : avatarDefault;
    const name = localStorage.getItem('dataUser') !== null ?
      JSON.parse(localStorage.getItem('dataUser') as string).first_name :
      'Unkown';
    return `
      <main class='profile'>

        <section class='profile__main'>
          <form class='profile__formAvatar' id='profile__formAvatar'>
            <img class='profile__avatar' src=${avatar} alt='аватар'/>
          </form>
          <p class='profile__name'>${name}</p>
          <form class='profile__data' id='profile__data'>

            <div class='profile__buttons'>

            </div>
          </form>
        </section>
      </main>
    `
}
