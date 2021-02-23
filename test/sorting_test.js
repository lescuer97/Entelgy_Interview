const expect = require("chai").expect;
const assert = require("chai").assert;
const { searcher } = require("../utils/utilFunction");
describe("searching for users", () => {
  const arrayUsers = [
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
    assert(searcher(arrayUsers, "a0ece5db-cd14-4f21-812f-966633e7be86"), [
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
  it("should give me one field of the same id", function() {
    assert(searcher(arrayUsers, "a3b8d425-2b60-4ad7-becc-bedf2ef860bd"), [
      {
        id: "a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
        name: "Barnett",
        email: "barnettblankenship@quotezart.com",
        role: "user",
      },
    ]);
  });
});

describe("searching for contractact", () => {
  const contractArray = [
    {
      id: "64cceef9-3a01-49ae-a23b-3761b604800b",
      amountInsured: "1825.89",
      email: "inesblankenship@quotezart.com",
      inceptionDate: "2016-06-01T03:33:32Z",
      installmentPayment: true,
      clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    },
    {
      id: "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
      amountInsured: "399.89",
      email: "inesblankenship@quotezart.com",
      inceptionDate: "2015-07-06T06:55:49Z",
      installmentPayment: true,
      clientId: "a0ece5db-cd14-4f21-812f-966633e7be86",
    },
    {
      id: "56b415d6-53ee-4481-994f-4bffa47b5239",
      amountInsured: "2301.98",
      email: "inesblankenship@quotezart.com",
      inceptionDate: "2014-12-01T05:53:13Z",
      installmentPayment: false,
      clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    },
    {
      id: "64cceef9-3a01-49ae-a23b-3761b604800b",
      amountInsured: "1825.89",
      email: "inesblankenship@quotezart.com",
      inceptionDate: "2016-06-01T03:33:32Z",
      installmentPayment: true,
      clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
    },
  ];
  it("should give me two fields of the same id", function() {
    assert(searcher(contractArray, "64cceef9-3a01-49ae-a23b-3761b604800b"), [
      {
        id: "64cceef9-3a01-49ae-a23b-3761b604800b",
        amountInsured: "1825.89",
        email: "inesblankenship@quotezart.com",
        inceptionDate: "2016-06-01T03:33:32Z",
        installmentPayment: true,
        clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
      },
      {
        id: "64cceef9-3a01-49ae-a23b-3761b604800b",
        amountInsured: "1825.89",
        email: "inesblankenship@quotezart.com",
        inceptionDate: "2016-06-01T03:33:32Z",
        installmentPayment: true,
        clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
      },
    ]);
  });
});
