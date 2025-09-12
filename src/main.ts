// import { block } from "./modules/block/block";

// main.prototype.block = block as ()=>void;

export function main() {
    return `
        <nav class='main'>
            <ul class='main__list'>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='loginLink'>
                        login
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='registrationLink'>
                        registration
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='chatsLink'>
                        chats
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='profileLink'>
                        profile
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='errorRout404Link'>
                        err404
                    </a>
                </li>
                <li class='main__point'>
                    <a class='main__pointLink' type='button' id='errorRout500Link'>
                        err500
                    </a>
                </li>
            </ul>
        </nav>
    `
}
