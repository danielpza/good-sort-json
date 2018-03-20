const should = require("chai").should();
const jsonSort = require("..");

describe("json-sort", () => {
    it("should sort basic json", () => {
        const input = {
            b: "3",
            a: 2,
        };
        const result = jsonSort(input);
        const expected = `{
  "a": 2,
  "b": "3"
}`;
        result.should.be.eq(expected);
    });
});
