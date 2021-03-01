var chai = require("chai"),
  chaiHttp = require("chai-http");
var expect = require("chai").expect;

chai.use(chaiHttp);

chai.request("http://localhost:3000/api/v1/policies").get("/");

// TODO FIXIED THE INTEGRATION TESTING
describe("policies integration", () => {
  it("should return only one policy", (done) => {
    chai
      .request("http://localhost:3000/api/v1/policies")
      .get("/d973993a-d35e-4d12-abb5-38083d556101")
      .end(function(err, res) {
        expect(res.body).to.deep.equal([
          {
            id: "d973993a-d35e-4d12-abb5-38083d556101",
            amountInsured: "1609.4",
            email: "inesblankenship@quotezart.com",
            inceptionDate: "2016-01-31T03:52:33Z",
            installmentPayment: true,
          },
        ]);
        done();
      });
  });
});
