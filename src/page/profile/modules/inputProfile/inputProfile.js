export default 

// <span class='inputProfile__error'>${textError}</span>

function ( {heading, name, type, placeholder, value, disabled, textError} ) {
    if (value === undefined) {
        value = `1111`
    };
    return `
        <label class='inputProfile'>
            <p class='inputProfile__heading'>${heading}</p>
            <input
                class='inputProfile__input'
                type=${type}
                name=${name}
                id=${name}
                value=${value}
                placeholder=${placeholder}
                ${disabled ? 'disabled' : ''}
            />
        </label>
    `
}