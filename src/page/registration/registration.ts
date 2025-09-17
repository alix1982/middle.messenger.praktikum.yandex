import { block } from '../../modules/block/block'

registration.prototype.block = block as () => void

export function registration() {
  return `
    <main class='registration'>
      <section class='registration__main'>
        <h1 class='registration__heading'>Регистрация</h1>
        <form class='registration__form'>

        </form>

      </section>
    </main>
  `
}
