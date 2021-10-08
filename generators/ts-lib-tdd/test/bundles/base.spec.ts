import hlo from "../../src/";
// TODO should come from global setup
import { expect } from "chai";

describe("base", () => {
  it("Should be true", () => {
    expect(true).eq(true);
  });
});

describe("Hlo test", () => {
  it("should be an function", () => {
    expect(hlo).to.be.instanceOf(Function);
  });
  it("should return a string", () => {
    expect(hlo()).to.eq("hlo");
  });
});
