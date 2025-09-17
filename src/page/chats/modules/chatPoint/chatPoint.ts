import { block } from "../../../../modules/block/block";

chatPoint.prototype.block = block as ()=>void;

export function chatPoint(id: number) {

  return `
    <li class='chatPoint' id=${id}>

    </li>
  `
}
