// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    if (encode === true){
      //encode solution
      const key = {"a": 11, "b":21, "c": 31, "d": 41, "e": 51, "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52, "l": 13, "m": 23, "n": 33, "o": 43, "p": 53, "q": 14, "r": 24, "s": 34, "t": 44, "u": 54, "v": 15, "w": 25, "x": 35, "y": 45, "z": 55};
      const letters = Object.keys(key);
      const numbers = Object.values(key);
      const inputArray = input.toLowerCase().split("");
      let newArray = inputArray.map((letter) => {
        if (letters.includes(letter)){
          const index = letters.indexOf(letter);
          return numbers[index];
        } else {
          return letter;
        }
      });
      return newArray.join("");
    } else {
      //decode solution
      let count = 0;
      const inputArray = input.split("");
      inputArray.forEach((number) => {
        if(number === " "){
          //if number is a space do nothing
        } else {
          count++;
        }
      });
      if (count % 2 === 0){
        const key = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "(i/j)": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"};
      const letters = Object.keys(key);
      const numbers = Object.values(key);
      const numberGroups = input.split(" ");
      const result = numberGroups.map((numberGroup) => {
        //find index of the number group to decode
        const codedLetters = numberGroup.match(/.{1,2}/g);
        const decodedWord = codedLetters.map((codedLetter) => {
          const index = numbers.indexOf(codedLetter);
          return letters[index];
        });
        return decodedWord.join("");
      });
      return result.join(" ");
      } else {
        return false;
      }


      // const key = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "(i/j)": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"};
      // const letters = Object.keys(key);
      // const numbers = Object.values(key);
      // const numberGroups = input.split(" ");
      // const result = numberGroups.map((numberGroup) => {
      //   //find index of the number group to decode
      //   const codedLetters = numberGroup.match(/.{1,2}/g);
      //   const decodedWord = codedLetters.map((codedLetter) => {
      //     const index = numbers.indexOf(codedLetter);
      //     return letters[index];
      //   });
      //   return decodedWord.join("");
      // });
      // return result.join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
