import { expect } from "chai";
import { buttonLinkLayout } from "./buttonLinkLayout";

describe('test buttonLink', () => {
  it('return buttonLink', () => {
    let sampleResult =
      "<button class='buttonLink' id=idButton type=typeButton>textButton</button>";
    expect(buttonLinkLayout('idButton', 'textButton', 'typeButton').trim()).to.equal(sampleResult);
  });
});
