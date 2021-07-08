// Write your tests here!
const expect = require(`chai`).expect;
const {substitution} = require("../src/substitution.js");

describe("substitution() tests written locally", () => {
    it("Testing if function returns false when given duplacates", () => {
        const alphabet = "aabksdfskdf";
        const actual = substitution(alphabet);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("Testing if alphabet is more or less than 26 return false", () => {
        const alphabet = "abcdefghijk";
        const actual = substitution(alphabet);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("Testing if the function encodes correctly", () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "message";
        const actual = substitution(input, alphabet);
        const expected = "ykrrpik";
        expect(actual).to.eql(expected);
    });
    it("Maintains spaces when encoding", () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "mes sage";
        const actual = substitution(input, alphabet);
        const expected = "ykr rpik";
        expect(actual).to.eql(expected);
    });
    it("Maintains spaces when decoding", () => {
        const encode = false;
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "ykrrp ik";
        const actual = substitution(input, alphabet, encode);
        const expected = "messa ge";
        expect(actual).to.eql(expected);
    });
    it("Ignores capital letters when encoding", () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "MeSsAge";
        const actual = substitution(input, alphabet);
        const expected = "ykrrpik";
        expect(actual).to.eql(expected);
    });
});