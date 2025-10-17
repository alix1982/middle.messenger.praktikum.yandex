import { expect } from "chai";
import { inputLayout } from "./inputLayout";
// import { input } from "../../input/input";

describe('test input', () => {
  it('return input', () => {
    let sampleResult =
      "<input class='input' type=type name=name id=name placeholder=placeholder/>"
    expect(inputLayout('name', 'type', 'placeholder').trim()).to.equal(sampleResult);
  });
});
