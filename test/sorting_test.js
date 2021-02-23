const expect = require("chai").expect;
const assert = require("chai").assert;

describe("searching for users", function() {
  const { searcher } = require("../utils/utilFunction");

  const array = [
    {
      id: "a0ece5db-cd14-4f21-812f-966633e7be86",
      name: "Britney",
      email: "britneyblankenship@quotezart.com",
      role: "admin",
    },
    {
      id: "a0ece5db-cd14-4f21-812f-966633e7be86",
      name: "Britney",
      email: "britneyblankenship@quotezart.com",
      role: "admin",
    },
    {
      id: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
      name: "Manning",
      email: "manningblankenship@quotezart.com",
      role: "admin",
    },
    {
      id: "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
      name: "Barnett",
      email: "barnettblankenship@quotezart.com",
      role: "user",
    },
  ];

  it("should give me two fields of the same id", function() {
    assert(searcher(array, "a0ece5db-cd14-4f21-812f-966633e7be86"), [
      {
        id: "a0ece5db-cd14-4f21-812f-966633e7be86",
        name: "Britney",
        email: "britneyblankenship@quotezart.com",
        role: "admin",
      },
      {
        id: "a0ece5db-cd14-4f21-812f-966633e7be86",
        name: "Britney",
        email: "britneyblankenship@quotezart.com",
        role: "admin",
      },
    ]);
  });
});
