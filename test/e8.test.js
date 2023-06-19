import { vitest, it, describe, expect, } from "vitest";
import { promiseResolved, promiseRejected } from "../exercises/e8.js";

describe("promiseResolved", () => {
  it("promiseResolved variable should exist", () => {
    expect(promiseResolved).toBeInstanceOf(Object);
  });

  it("promiseResolved constructor should have a name of Promise", () => {
    expect(promiseResolved.constructor.name).toEqual("Promise");
  });

  it("Promise should log a resolved message in the console", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await promiseResolved.then((d) => console.log(d));
    expect(logSpy).toHaveBeenLastCalledWith("The PROMISE was RESOLVED");
  });
});

describe("promiseRejected variable test", () => {
  it("promiseRejected variable should exist", () => {
    expect(promiseRejected).toBeInstanceOf(Object);
  });

  it("promiseRejected constructor should have a name of Promise", () => {
    expect(promiseRejected.constructor.name).toEqual("Promise");
  });

  it("promiseRejected should resole with a rejected reason of the promise", async () => {
    expect(await promiseRejected).toEqual("The PROMISE was REJECTED");
  });
});
