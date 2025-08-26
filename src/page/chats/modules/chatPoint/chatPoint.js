export default function ({idChat, name, messeges, time, countMessegesNotRead}) {

    return `
        <li class='chatPoint'>
            <button class='chatPoint__button' id=${idChat}>
                <img class='chatPoint__avatar'/>
                <div class='chatPoint__main'>
                    <p class='chatPoint__heading'>
                        ${name}
                    </p>
                    <p class='chatPoint__content'>
                        ${messeges[messeges.length - 1].text}
                    </p>
                </div>
                <div class='chatPoint__info'>
                    <p class='chatPoint__time'>
                        ${new Date(messeges[messeges.length - 1].dateUnix * 1000).getHours()}:
                        ${new Date(messeges[messeges.length - 1].dateUnix * 1000).getMinutes()}
                    </p>
                    <p class='chatPoint__countMesNotRead'>
                        ${countMessegesNotRead}
                    </p>
                </div>
                <div class='chatPoint__scroll'></div>
            </button>
        </li>
    `
}