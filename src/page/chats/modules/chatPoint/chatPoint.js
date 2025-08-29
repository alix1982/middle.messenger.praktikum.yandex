export default function ({idChat, name, messeges, avatarUser, time, countMessegesNotRead}) {


    return `
        <li class='chatPoint'>
            <button class='chatPoint__button' id=${idChat} type='button'>
                <img class='chatPoint__avatar' src=${avatarUser} alt='аватар'/>
                <article class='chatPoint__main'>
                    <p class='chatPoint__heading'>
                        ${name}
                    </p>
                    <p class='chatPoint__content'>
                        ${messeges[messeges.length - 1].text}
                    </p>
                </article>
                <article class='chatPoint__info'>
                    <p class='chatPoint__time'>
                        ${new Date(messeges[messeges.length - 1].dateUnix * 1000).getHours()}:
                        ${new Date(messeges[messeges.length - 1].dateUnix * 1000).getMinutes()}
                    </p>
                    <p class='chatPoint__countMesNotRead'>
                        ${countMessegesNotRead}
                    </p>
                </article>
                <div class='chatPoint__scroll'></div>
            </button>
        </li>
    `
}
