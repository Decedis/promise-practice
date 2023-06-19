import { it, describe, expect } from "vitest";
import { handlePromise } from "../exercises/e4.js";

describe("Promise variable test", () => {
  it("Promise variable should exist", () => {
    expect(handlePromise).toBeInstanceOf(Object);
  });
  it("Promise constructor should have a name of Promise", () => {
    expect(handlePromise.constructor.name).toEqual("Promise");
  });
});

describe("Promise is settled as resolved", () => {
  it("Promise should resolve with a value of 10", async () => {
    expect(handlePromise).resolves.toEqual(10);
  });
});
