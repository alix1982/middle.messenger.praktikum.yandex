export default 
function (heading, textError, name, type, value) {

    return `
        <label class='inputForm'>
            <p class='inputForm__heading'>${heading}</p>
            <input class='inputForm__input' type=${type} name=${name} id=${name} value=${value}/>
            <span class='inputForm__error'>${textError}</span>
        </label>
    
    `
}
