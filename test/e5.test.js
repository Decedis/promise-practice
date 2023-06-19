import { vitest, it, describe, expect } from "vitest";
import { attachTitle, getPromise } from "../exercises/e5.js";

describe("Promise variable test", () => {
  it("Promise variable should exist", () => {
    expect(getPromise).toBeInstanceOf(Object);
  });
  it("Promise constructor should have a name of Promise", () => {
    expect(getPromise().constructor.name).toEqual("Promise");
  });
});

describe("attachTitle test", () => {
  it("The attachTitle function should return the name after 'DR.'", () => {
    expect(attachTitle("SomeName")).toEqual("DR. SomeName");
  });
});

describe("getPromise test", () => {
  it("Promise should resolve with logging a message of 'DR. MANHATTAN' in the console", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await getPromise();
    expect(logSpy).toHaveBeenCalledWith("DR. MANHATTAN");
  });
});
