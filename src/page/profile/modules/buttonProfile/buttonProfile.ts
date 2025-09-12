
interface IButtonProfile {
    id: string,
    text: string,
    heading: string,
    name: string,
    type: string,
    placeholder: string,
    value: string,
    disabled: string,
    textError: string,
    typeButton: string
}

export default


function ( {id, text, typeButton='button' }: IButtonProfile ): string {
    return `
        <button class='profile__button' id=${id} type=${typeButton}>${text}</button>
    `
}
