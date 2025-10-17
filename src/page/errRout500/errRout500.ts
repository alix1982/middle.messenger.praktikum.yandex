import { block } from "../../modules/block/block";

errRout500.prototype.block = block as ()=>void;

export function errRout500() {
  return `
    <main class='errRout500'>
      <section class='errRout500__main'>
        <h1 class='errRout500__heading'>500</h1>
        <p class='errRout500__text'>Мы уже фиксим</p>

      </section>
    </main>
  `
}

// <a class='errRout500__transitionRegistr' href='../../login.html'>Назад к чатам</a>
