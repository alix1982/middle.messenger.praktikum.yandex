export default 

function ( {id, text, heading, name, type, placeholder, value, disabled, textError, typeButton='button' } ) {
    return `
        <button class='profile__button' id=${id} type=${typeButton}>${text}</button>
    `
}
