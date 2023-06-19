import { vitest, it, describe, expect } from "vitest";
import fetch from "node-fetch";
import { result, usersUrl } from "../exercises/e11.js";

describe("Result variable test", () => {
  it("Result variable should exist", () => {
    expect(result).toBeInstanceOf(Object);
  });

  it("Result constructor should have a name of Promise", () => {
    expect(result.constructor.name).toEqual("Promise");
  });
});

describe("Promise is settled as resolved", () => {
  const dataArrSample = [
    "user1@test.com",
    "user2@test.com",
    "user3@test.com",
    "user4@test.com",
  ];

  it("Promise should log a resolved message in the console", async () => {
    const logSpy = vitest.spyOn(console, "log");
    await result;
    expect(logSpy).toHaveBeenLastCalledWith(dataArrSample);
  });

  it("Promise should resolve with a message of 'The PROMISE was RESOLVED'", async () => {
    expect(await result).toEqual(dataArrSample);
  });
});

describe("Test the users EndPoint and json-server running", () => {
  const dataSample = [
    { id: 1, login: "user1@test.com", isActive: false },
    { id: 2, login: "user2@test.com", isActive: false },
    { id: 3, login: "user3@test.com", isActive: true },
    { id: 4, login: "user4@test.com", isActive: false },
  ];

  it("The URL is set correctly", () => {
    expect(usersUrl).toEqual("http://localhost:3000/users/");
  });

  it("json-server is started", async () => {
    const res = fetch(usersUrl)
      .then((r) => r.json())
      .then((d) => d);
    expect(await res).toEqual(dataSample);
  });
});
