import { block } from "../../modules/block/block";

login.prototype.block = block as ()=>void;

export function login() {

  return `
    <main class='login'>
      <section class='login__main'>
        <h1 class='login__heading'>Вход</h1>
        <form class='login__form'>

        </form>

      </section>
    </main>
  `
}
