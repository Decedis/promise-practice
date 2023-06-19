import { vitest, it, describe, expect } from "vitest";
import { handlePromise } from "../exercises/e6.js";

describe("handlePromise", () => {
  it("Function should exist", () => {
    expect(handlePromise).toBeInstanceOf(Function);
  });

  it("Function return value constructor should have a name of Promise", () => {
    expect(handlePromise().constructor.name).toEqual("Promise");
  });

  it("Promise finally logs a message of 'This promise is finished!' in the console", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await handlePromise().catch((d) => console.log(d));
    expect(logSpy).toHaveBeenLastCalledWith("This promise is finished!");
  });
});

describe("The Promise consumer is using .catch() and .finally()", () => {
  it("The Promise consumer is using .catch()", async () => {
    expect(handlePromise.toString().includes(".catch(")).toEqual(true);
  });

  it("The Promise consumer is using .finally()", async () => {
    expect(handlePromise.toString().includes(".finally(")).toEqual(true);
  });
});
