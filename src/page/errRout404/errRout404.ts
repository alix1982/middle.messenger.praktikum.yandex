import { block } from "../../modules/block/block";

errRout404.prototype.block = block as ()=>void;

export function errRout404() {
  return `
    <main class='errRout404'>
      <section class='errRout404__main'>
        <h1 class='errRout404__heading'>404</h1>
        <p class='errRout404__text'>Не туда попали</p>

      </section>
    </main>
  `
}
// <a class='errRout404__transitionRegistr' href='../../login.html'>Назад</a>
