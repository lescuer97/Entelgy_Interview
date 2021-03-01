const expect = require("chai").expect;
const assert = require("chai").assert;
const { idCompare } = require("../utils/utilFunction");
describe("searching for users", () => {
  it("should give me one field of the same id", function() {
    const arrayUsers = require("./clients.json");

    expect(
      idCompare(arrayUsers, "a3b8d425-2b60-4ad7-becc-bedf2ef860bd")
    ).to.deep.equal([
      {
        id: "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
        name: "Barnett",
        email: "barnettblankenship@quotezart.com",
        role: "user",
      },
    ]);
  });
});

describe("search of a unique policy", () => {
  it("should give the contract searched", () => {
    const arrayPolicy = require("./policies.json");

    expect(
      idCompare(arrayPolicy, "84d2812f-49be-4a71-8ea8-f24759528a6f")
    ).to.deep.equal([
      {
        id: "84d2812f-49be-4a71-8ea8-f24759528a6f",
        amountInsured: "212.84",
        email: "inesblankenship@quotezart.com",
        inceptionDate: "2015-10-21T01:38:01Z",
        installmentPayment: true,
        clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
      },
    ]);
  });
});
