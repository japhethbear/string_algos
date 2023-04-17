// Remove Blanks

function removeBlanks(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (char !== " ") {
            result += char;
        }
    }
    return result
}

// console.log(removeBlanks("Somebody told me that you had a boyfriend that looked like a girlfriend."))


// Get Digits 

function getDigits(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (!isNaN(char)) {
            result += char;
        }
    }
    return Number(result);
}

// console.log(getDigits("So9mebo1dy told 2me tha3t you ha49d a bo11yfriend that looked like a girlfriend."));



// Acronyms

function acronym(string) {
    let words = string.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word !== "") {
        result += word.charAt(0).toUpperCase();
      }
    }
    return result;
  }

//   console.log(acronym("National Football Leauge"))


// Count Non-Spaces

function countNonSpaces(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        count++;
      }
    }
    return count;
  }
  
// console.log(countNonSpaces("So9mebo1dy told 2me tha3t you ha49d a bo11yfriend that looked like a girlfriend."))


// Remove Shorter Strings

function removeShorterStrings(array, value) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length >= value) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  console.log(removeShorterStrings("So9mebo1dy told 2me tha3t you ha49d a bo11yfriend that looked like a girlfriend."))



