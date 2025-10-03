import { block } from "../../../../modules/block/block"

inputAvatar.prototype.block = block as () => void

export function inputAvatar(id: string, avatar: string, textFormAvatar: string) {
  return `
        <label class='inputAvatar'>
            <input id=${id} class='inputAvatar__input' type='file' name=${id}/>
            <input type="submit">
            <img for='avatar' class='inputAvatar__img' src=${avatar} alt='аватар'/>
            <span class='inputAvatar__hover'>Поменять аватар<br/>до 4Мб</span>
            <span class='inputAvatar__messege'>${textFormAvatar}</span>
        </label>
    `
}
