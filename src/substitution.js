// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //check for alphabet, length of alphabet, and make sure alphabet is a string
  // create original alphabet for input
  const alphabetInput = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    // your solution code here
      //check for alphabet, length of alphabet, and make sure alphabet is a string
    if (!alphabet || alphabet.length < 26 || typeof(alphabet)!= 'string'){
       return false;
    }
    // return false if substitution alphabet dows not conatin unique characters
    for (let firstLetter in alphabet) {
      for (let secondLetter in alphabet) {
        if (alphabet[firstLetter] === alphabet[secondLetter] && firstLetter != secondLetter) {
          return false;
        }
      }
    }
    // Use the toLowerCase() method in order to turn uppercase letter to lowercase.
    input = input.toLowerCase();
    // create variable for the final output
    let finalOutput = '';
    for(let origLetter in input) {
      // skip spaces
      if (input[origLetter] === " ") {
        finalOutput += input[origLetter];
      };
      for(let letter in alphabetInput) {
        // if encode is true 
        if(encode === true) {
          if(input[origLetter] == alphabetInput[letter]) {
            finalOutput += alphabet[letter];
          }
          // if encode is false, Decoding
        } else if(encode === false) {
          if(input[origLetter] === alphabet[letter]) {
              finalOutput += alphabetInput[letter];
          }
        }
      }
    }
    return finalOutput;
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
