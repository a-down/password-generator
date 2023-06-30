// Assignment Code
var generateBtn = document.querySelector("#generate");

// So, what I am doing is writing the code for the function "generatePassword". Once I generate a function, it will fit in.

// YOU CAN SELECT RANDOM CHARACTERS FROM AN ARRAY. FOR LOWERCASE CHARACTERS, THEY SAY IF THEY WANT THEM. THEN THE CODE PICKS A NUMBER OF LOWERCASE LETTERS FROM THE ARRAY.

//  generatePassword();
var generatePassword = function() {
  generateLength();
}

//  length of password (8-128)
var generateLength = function() {
  var passLength = prompt("How many characters long should the password be? (between 8-128 characters)")
  if (passLength < 8) {
    alert("Please choose a longer password length.");
    generateLength();
  } else if (passLength > 128) {
    alert("Please choose a shorter password length.");
    generateLength();
  } else {
    console.log(passLength);                //  console.log -- delete later
    generateLowercase();
  }
}

//  lowercase?
var generateLowercase = function() {
  var passLowercase = prompt("Should the password have lowercase letters? (yes or no)"); 
  if (passLowercase !== "yes" && passLowercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateLowercase();
  } else {
    console.log(passLowercase);
    generateUppercase();
  }
}

//  uppercase?
var generateUppercase = function() {
  var passUppercase = prompt("Should the password have uppercase letters? (yes or no)");
  if (passUppercase !== "yes" && passUppercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateUppercase();
  } else {
    console.log(passUppercase);
    generateNumbers();
  }
}

//  numbers
var generateNumbers = function() {
  var passNumbers = prompt("Should the password have numbers? (yes or no)");
  if (passNumbers !== "yes" && passNumbers !== "no") {
    alert("Please try again. Answer yes or no.");
    generateNumbers();
  } else {
    console.log(passNumbers);
    generateSpecialCharacters();
  }
}

//  special characters?
var generateSpecialCharacters = function() {
  var passSpecial = prompt("Should the password have special characters? (yes or no)");
  if (passSpecial !== "yes" && passSpecial !== "no") {
    alert("Please try again. Answer yes or no.");
    generateSpecialCharacters();
  } else {
    console.log(passSpecial);
  }
}

//  after all prompts, password is generated


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);