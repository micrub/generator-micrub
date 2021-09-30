import { expect } from "chai";
import hlo from "../../src/";

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
