import { block } from '../../modules/block/block'

chats.prototype.block = block as () => void

export function chats() {
  return `
    <main class='chats'>
      <section class='chats__list' id='chats__list'>

      </section>
      <section class='chats__item' id='chats__item'>
        <p class='chats__itemText'>Выберите чат чтобы отправить сообщение</p>
      </section>
  </main>
  `
}
