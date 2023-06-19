import { vitest, it, describe, expect } from "vitest";
import { promise, iterate, alwaysThrows, onReject } from "../exercises/e9.js";

describe("Promise variable test", () => {
  it("Promise variable should exist", () => {
    expect(promise).toBeInstanceOf(Object);
  });
  it("Promise constructor should have a name of Promise", () => {
    expect(promise.constructor.name).toEqual("Promise");
  });
});

describe("iterate function test", () => {
  it("Should return an incremented value", () => {
    expect(iterate(10)).toEqual(11);
  });
  it("Should log the argument value", () => {
    const logSpy = vitest.spyOn(console, "log");
    const arg = 10;
    iterate(arg);
    expect(logSpy).toHaveBeenCalledWith(arg);
  });
});

describe("alwaysThrow function test", () => {
  it("Should return an error", () => {
    expect(alwaysThrows).toThrow(new Error("OH NOES"));
  });
});

describe("onReject function test", () => {
  it("Should log the error message", () => {
    const logSpy = vitest.spyOn(console, "log");
    onReject(new Error("OH NOES"));
    expect(logSpy).toBeCalledWith("OH NOES");
  });
});

describe("Promise is settled as rejected", () => {
  it("Promise resolves with undefined return value of the onReject() function call", async () => {
    const logSpy = vitest.spyOn(console, "log");
    expect(logSpy).toHaveBeenCalledOnce;
    expect(await promise).toEqual(undefined);
  });
});
