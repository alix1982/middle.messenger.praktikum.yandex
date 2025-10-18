
import { expect } from "chai";
import { HTTPTransport } from "./api";
import { BASE_URL } from "../utils/constant";
// import { BASE_URL } from "../utils/constant";
// import Sinon from "sinon";

// function hello(str: string) {
//   return ('Hello' + str)
// }

describe("Checked api", () => {

  function checkReturnRequest() {
    let request = new HTTPTransport().request(BASE_URL);
    return request instanceof Promise
  };
  function checkApiArgs(arg1: any, arg2: any) {
    let resPromise = true
    try {
      new HTTPTransport().request(arg1, arg2)
    } catch (err) {
      return err
    }


    return resPromise
  }
  // });
  it("should return promise correctly", () => {
    expect(checkReturnRequest()).to.be.eq(true)
  });
  describe('checked argument api url', () => {
    it("it should return an error with the value of the url argument []", () => {
      expect(checkApiArgs([], {}) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs([], {}) instanceof Error, true);
    });
    it("it should return an error with the value of the url argument number", () => {
      expect(checkApiArgs(100, {}) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs(100, {}) instanceof Error, true);
    });
    it("it should return an error with the value of the url argument undefined", () => {
      expect(checkApiArgs(undefined, {}) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs(undefined, {}) instanceof Error, true);
    });
    it("it should return an error with the value of the url argument null", () => {
      expect(checkApiArgs(null, {}) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs(null, {}) instanceof Error, true);
    });
    it("it should return an error with the value of the url argument ''", () => {
      expect(checkApiArgs('', {}) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs('', {}) instanceof Error, true);
    });
  })
  describe('checked argument api options', () => {
    it("it should return an error with the value of the options argument string", () => {
      expect(checkApiArgs('http', 'test') instanceof Error).to.be.eq(true)
      // expect(checkApiArgs('http', 'test') instanceof Error, true);
    });
    it("it should return an error with the value of the options argument number", () => {
      expect(checkApiArgs('http', 1234) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs('http', 1234) instanceof Error, true);
    });
    it("it should return an error when the options [] argument is set.", () => {
      expect(checkApiArgs('http', []) instanceof Error).to.be.eq(true)
      // expect(checkApiArgs('http', []) instanceof Error, true);
    });
  })
});
