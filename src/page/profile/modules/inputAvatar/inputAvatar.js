export default 

function inputAvatar( name, avatar, textFormAvatar ) {
    
    return `
        <label class='inputAvatar'>
            <input id='avatar' class='inputAvatar__input' type='file' name=${name}/>
            <img for='avatar' class='inputAvatar__img' src=${avatar} alt='аватар'/>
            <span class='inputAvatar__hover'>Поменять аватар<br/>до 1Мб</span>
            <span class='inputAvatar__messege'>${textFormAvatar}</span>
        </label>
    `
}
