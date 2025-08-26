export default 
function (heading, textError, name, type, value) {
    // console.log(name);
    // console.log(`#${name}`)
    // const inputForm = document.querySelector(`#${name}`)
    // inputForm.addEventListener('onchange', console.log('ok'))
    return `
        <label class='inputForm'>
            <p class='inputForm__heading'>${heading}</p>
            <input class='inputForm__input' type=${type} name=${name} id=${name} value=${value}/>
            <span class='inputForm__error'>${textError}</span>
        </label>
    
    `
}