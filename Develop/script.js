// Assignment Code
var generateBtn = document.querySelector("#generate");


//  length of password (8-128)
function generateLength() {
  var passLength = prompt("How many characters long should the password be? (between 8-128 characters)")
  if (passLength < 8) {
    alert("Please choose a longer password length.");
    generateLength();
  } else if (passLength > 128) {
    alert("Please choose a shorter password length.");
    generateLength();
  } else {
    return;            
  }
}

//  lowercase?
function generateLowercase() {
  var passLowercase = prompt("Should the password have lowercase letters? (yes or no)"); 
  if (passLowercase !== "yes" && passLowercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateLowercase();
  } else {
    return;
  }
}

//  uppercase?
function generateUppercase() {
  var passUppercase = prompt("Should the password have uppercase letters? (yes or no)");
  if (passUppercase !== "yes" && passUppercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateUppercase();
  } else {
    return;
  }
}

//  numbers?
function generateNumbers() {
  var passNumbers = prompt("Should the password have numbers? (yes or no)");
  if (passNumbers !== "yes" && passNumbers !== "no") {
    alert("Please try again. Answer yes or no.");
    generateNumbers();
  } else {
    return;
  }
}

//  special characters?
function generateSpecialCharacters() {
  var passSpecial = prompt("Should the password have special characters? (yes or no)");
  if (passSpecial !== "yes" && passSpecial !== "no") {
    alert("Please try again. Answer yes or no.");
    generateSpecialCharacters();
  } else {
    return;
  }
}

/*
//  get user attributes
var generateAttributes = function() {
  generateLength();
  generateLowercase();
  generateUppercase();
  generateNumbers();
  generateSpecialCharacters();
  return
}
*/


//  define variables for the userAttributes Object
var userLength
var userLowercase
var userUppercase
var userNumbers
var userSpecial


function generatePassword() {
  userLength = generateLength();
  userLowercase = generateLowercase();
  userUppercase = generateUppercase();
  userNumbers = generateNumbers();
  userSpecial = generateSpecialCharacters();
}

var userAttributes = {
  length: userLength,
  lowercase: userLowercase,
  uppercase: userUppercase,
  numbers: userNumbers,
  special: userSpecial,
}

generatePassword();
console.log(userAttributes);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);