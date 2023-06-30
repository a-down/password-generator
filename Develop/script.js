// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passLength;
var passLowercase;
var passUppercase;
var passNumbers;
var passSpecial;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  generateLength();
  generateLowercase();
  generateUppercase();
  generateNumbers();
  generateSpecialCharacters();
}

//  length of password (8-128)
function generateLength() {
  response = prompt("How many characters long should the password be? (between 8-128 characters)")
  if (response < 8) {
    alert("Please choose a longer password length.");
    generateLength();
  } else if (response > 128) {
    alert("Please choose a shorter password length.");
    generateLength();
  } else {
    passLength = parseInt(response)
    return;            
  }
}

//  lowercase?
function generateLowercase() {
  passLowercase = prompt("Should the password have lowercase letters? (yes or no)"); 
  if (passLowercase !== "yes" && passLowercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateLowercase();
  } else {
    return;
  }
}

//  uppercase?
function generateUppercase() {
  passUppercase = prompt("Should the password have uppercase letters? (yes or no)");
  if (passUppercase !== "yes" && passUppercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateUppercase();
  } else {
    return;
  }
}

//  numbers?
function generateNumbers() {
  passNumbers = prompt("Should the password have numbers? (yes or no)");
  if (passNumbers !== "yes" && passNumbers !== "no") {
    alert("Please try again. Answer yes or no.");
    generateNumbers();
  } else {
    return;
  }
}

//  special characters?
function generateSpecialCharacters() {
  passSpecial = prompt("Should the password have special characters? (yes or no)");
  if (passSpecial !== "yes" && passSpecial !== "no") {
    alert("Please try again. Answer yes or no.");
    generateSpecialCharacters();
  } else {
    return;
  }
}

// if 4 yes, x=4, if 3 yes x=3, if 2 yes x=2, if 1 yes x=1
// get remainder from passLength
// subtract remainder
// /x for each attribute
// if lowercase=true, add to lowercase #
// if lowercase=false, if uppercase is true, add to uppercase #
// if uppercase=false...

// grab that many from each array and put into userPassword array
//randomize array and write password to webpage