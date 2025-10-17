import { block } from "../block/block";
import { buttonLinkLayout } from "./buttonLinkLayout";

buttonLink.prototype.block = block as ()=>void;

export function buttonLink (idButton: string, textButton: string, typeButton='button') {
  return buttonLinkLayout(idButton, textButton, typeButton)
}
