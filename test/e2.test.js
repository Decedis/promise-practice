import { it, describe, expect } from "vitest";
import { getPromise, handlePromise } from "../exercises/e2.js";

describe("promise", () => {
  it("Promise variable should exist", () => {
    expect(getPromise).toBeInstanceOf(Function);
  });

  it("Promise constructor returned from the function should have a name of Promise", async () => {
    expect(getPromise(true).constructor.name).toEqual("Promise");
  });

  it("Promise should reject with the reason of 'The PROMISE was REJECTED'", async () => {
    expect(await getPromise(false).catch((n) => n)).toEqual(
      "The PROMISE was REJECTED"
    );
  });

  it("Promise should resolve with the value of 'The PROMISE was RESOLVED'", async () => {
    expect(await getPromise(true)).toEqual("The PROMISE was RESOLVED");
  });
});

describe("handlePromise", () => {
  it("should exist", () => {
    expect(handlePromise).toBeInstanceOf(Function);
  });

  it('should return a value that resolves to "Uh Oh" if I pass in a promise that rejects', async () => {
    expect(await handlePromise(Promise.reject())).toBe("Uh Oh");
  });

  it("should return a value that resolves to the resolved value of the promise I pass in", async () => {
    expect(
      await handlePromise(
        Promise.resolve("yoyoyo, I'm jon H and I'm ready to go")
      )
    ).toBe("yoyoyo, I'm jon H and I'm ready to go");
  });
});
