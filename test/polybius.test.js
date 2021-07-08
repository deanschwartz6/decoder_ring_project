// Write your tests here!
const expect = require(`chai`).expect;
const {polybius} = require("../src/polybius.js");

describe("Polybius() tests written locally", () => {
    it("When encoding it translates both i and j to 42", () => {
        const input = "ij";
        const actual = polybius(input);
        const expected = "4242";
        expect(actual).to.eql(expected);
    });
    it("When encoding it ignores capital letters", () => {
        const input = "Tt";
        const actual = polybius(input);
        const expected = "4444";
        expect(actual).to.eql(expected);
    });
    it("Maintain spaces when encoding", () => {
        const input = "i j";
        const actual = polybius(input);
        const expected = "42 42";
        expect(actual).to.eql(expected);
    });
    it("Maintain spaces when decoding", () => {
        const input = "44 44";
        const actual = polybius(input, false);
        const expected = "t t";
        expect(actual).to.eql(expected);
    });
    it("When decoding 42 -> (i/j)", () => {
        const input = "4242";
        const actual = polybius(input, false);
        const expected = "(i/j)(i/j)";
        expect(actual).to.eql(expected);
    });
});