export default 

function ( {id, text, heading, name, type, placeholder, value, disabled, textError} ) {
    return `
        <button class='profile__button' id=${id}>${text}</button>
    `
}