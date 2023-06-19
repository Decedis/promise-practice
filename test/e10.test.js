import { vitest, it, describe, expect } from "vitest";
import {
  handlePromise1,
  handlePromise2,
  handlePromise3,
  handlePromise4,
  promiseArr,
  newPromiseArr,
} from "../exercises/e10.js";

describe("HandlePromise1 test", () => {
  it("HandlePromise1 should exist should exist", () => {
    expect(handlePromise1).toBeInstanceOf(Object);
  });

  it("HandlePromise1 should return a promise", () => {
    expect(handlePromise1.constructor.name).toEqual("Promise");
  });

  it("HandlePromise1 should return the reason of the promise that rejects with 'Promise 2 REJECTED'", async () => {
    expect(await handlePromise1).toEqual("Promise 2 REJECTED");
  });
});

describe("HandlePromise2 function test", () => {
  it("HandlePromise2 variable should exist", () => {
    expect(handlePromise2).toBeInstanceOf(Function);
  });

  it("HandlePromise2 should return a promise", () => {
    expect(handlePromise2(promiseArr).constructor.name).toEqual("Promise");
  });

  it("HandlePromise2 should use .any() method", () => {
    const promiseSpy = vitest.spyOn(Promise, "any");
    handlePromise2(promiseArr);
    expect(promiseSpy).toBeCalled();
  });

  it("HandlePromise2 should return a resolved value of 'Promise 3 RESOLVED'", async () => {
    expect(await handlePromise2(promiseArr)).toEqual("Promise 3 RESOLVED");
  });
});

describe("HandlePromise3 variable test", () => {
  const sampleData = [
    { status: "fulfilled", value: "RESOLVED AGAIN" },
    { status: "rejected", reason: "Promise 2 REJECTED" },
    { status: "fulfilled", value: "Promise 3 RESOLVED" },
    { status: "fulfilled", value: "RESOLVED AGAIN" },
  ];

  it("Result3 variable should exist", () => {
    expect(handlePromise3).toBeInstanceOf(Function);
  });

  it("HandlePromise3 should return a promise", () => {
    expect(handlePromise3(promiseArr).constructor.name).toEqual("Promise");
  });

  it("HandlePromise3 should use .allSettled() method", () => {
    const promiseSpy = vitest.spyOn(Promise, "allSettled");
    handlePromise3(promiseArr);
    expect(promiseSpy).toBeCalled();
  });

  it("HandlePromise3 should return a resolved value of the array of all promises status and value/reason", async () => {
    expect(await handlePromise3(promiseArr)).toEqual(sampleData);
  });
});

describe("handlePromise4 variable test", () => {
  it("handlePromise4 variable should exist", () => {
    expect(handlePromise4).toBeInstanceOf(Function);
  });

  it("HandlePromise4 should return a promise", () => {
    expect(handlePromise4(newPromiseArr).constructor.name).toEqual("Promise");
  });

  it("HandlePromise4 should use .allSettled() method", () => {
    const promiseSpy = vitest.spyOn(Promise, "race");
    handlePromise4(promiseArr);
    expect(promiseSpy).toBeCalled();
  });

  it("HandlePromise4 should return a resolved value of 'RESOLVED AGAIN'", async () => {
    expect(await handlePromise4(newPromiseArr)).toEqual("RESOLVED AGAIN");
  });
});
