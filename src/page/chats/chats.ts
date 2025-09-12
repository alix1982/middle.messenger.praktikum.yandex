import { block } from '../../modules/block/block'
import { IDataChat } from '../../utils/constant'

chats.prototype.block = block as () => void

export function chats() {
  return `
         <main class='chats'>
            <section class='chats__list' id='chats__list'>

                <form id='chats_searchForm'>

                </form>

            </section>
            <section class='chats__item'>
                <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
            </section>
        </main>
    `
}

// ${button('Профиль &gt;', 'profileButton')}
// ${input('search', 'text', '&#128269;&nbsp;Поиск ')}
// ${chatsList(dataChats)}

