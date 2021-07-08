// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // your solution code here
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
    if (shift === 0 || shift < -25 || shift > 25){
      return false;
    } else {
      if (encode === true){
        //ENCODE SOLUTION
        const inputArray = input.split("");
        let newArray = inputArray.map((letter) => {
          letter = letter.toLowerCase();
          if (alphabet.includes(letter)){
            const index = alphabet.indexOf(letter);
            let i = index + shift;
            if (i > 25){
              let shiftedI = i - 26;
              return alphabet[shiftedI];
            } else if (i < 0){
              let shiftedI = 26 + i;
              return alphabet[shiftedI];
            } else {
              return alphabet[i];
            }
          } else {
            return letter;
          }
        });
        return newArray.join("");
        //END ENCODE
      } else {
        //DECODE SOLUTION
        const inputArray = input.split("");
        let newArray = inputArray.map((letter) => {
          letter = letter.toLowerCase();
          if (alphabet.includes(letter)){
            const index = alphabet.indexOf(letter);
            let i = index - shift;
            if (i > 25){
              let shiftedI = i - 26;
              return alphabet[shiftedI];
            } else if (i < 0){
              let shiftedI = 26 + i;
              return alphabet[shiftedI];
            } else {
              return alphabet[i];
            }
          } else {
            return letter;
          }
        });
        return newArray.join("");
      }
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
