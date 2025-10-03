import { block } from "../../../../../modules/block/block";

chatFormControl.prototype.block = block as ()=>void;

export function chatFormControl() {

  return `
    <form class='chat__controlForm' id='chat__controlForm'>

    </form>
  `
}
