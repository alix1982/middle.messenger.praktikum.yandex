import input from "../../../../../modules/input/input"
import readIcon from '../../../../../../static/img/readIcon.svg';

export function chatMessage({text, myMessege, dateUnix}) {
    // const {name} = chat;
    // console.log(message)
    return `
        <li class=${myMessege ? 'chatMessage__my' : 'chatMessage__companion'}>
            <p class='chatMessage__text'>${text}</p>
            <p class='chatMessage__info'>
                <span class=${myMessege ? 'chatMessage__read' : 'chatMessage__noRead'}></span>
                <span class='chatMessage__time'>
                    ${new Date(dateUnix * 1000).getHours()}:
                    ${new Date(dateUnix * 1000).getMinutes()}
                </span>
            </p>
        </li>
    `
}