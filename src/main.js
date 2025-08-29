export default function () {
    return `
        <nav class='main'>
            <ul class='main__list'>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='login'>
                        login
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='registration'>
                        registration
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='chats'>
                        chats
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='profile'>
                        profile
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='errorRout404'>
                        err404
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='errorRout500'>
                        err500
                    </a>
                </li>
            </ul>
        </nav>
    `
}
