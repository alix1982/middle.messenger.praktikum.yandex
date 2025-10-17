import { block } from "../block/block";

button.prototype.block = block as ()=>void;

export function button (
  idButton: string, textButton: string, typeButton='button', disabled:boolean = true
): string {
  return `
    <button class='button' id=${idButton} type=${typeButton} ${disabled ? 'disabled' : ''}>
      ${textButton}
    </button>
  `
}
