// Write your tests here!
const expect = require(`chai`).expect;
const {caesar} = require("../src/caesar.js");

describe("caesar() tests written locally", () => {
    it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        const input = "thinkful";
        const shift = 0;
        const actual = caesar(input, shift);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("It ignores capital letters", () => {
        const input = "ThInkFUL";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "wklqnixo";
        expect(actual).to.eql(expected);
    });
    it("Shifts if letter is \"off\" alphabet", () => {
        const input = "z";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "c";
        expect(actual).to.eql(expected);
    });
    it("Maintains special characters and spaces", () => {
        const input = "t!h in*kful";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "w!k lq*nixo";
        expect(actual).to.eql(expected);
    });
});