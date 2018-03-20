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
    it("should sort json with nested properties", () => {
        const input = {
            b: "3",
            c: {
                b: 2,
                a: 1
            },
            a: 2,
        };
        const result = jsonSort(input);
        const expected = `{
  "a": 2,
  "b": "3",
  "c": {
    "a": 1,
    "b": 2
  }
}`;
        result.should.be.eq(expected);
    });
});
