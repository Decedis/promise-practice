import { vitest, it, describe, expect } from "vitest";
import { getPromise } from "../exercises/e1.js";

describe("Promise variable test", () => {
  it("Promise variable should exist", () => {
    expect(getPromise).toBeInstanceOf(Object);
  });

  it("Promise variable constructor should have a name of Promise", () => {
    expect(getPromise.constructor.name).toEqual("Promise");
  });

  it("Promise should log a resolved message in the console", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await getPromise;
    expect(logSpy).toHaveBeenLastCalledWith("The PROMISE was RESOLVED");
  });
});
