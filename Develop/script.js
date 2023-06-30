// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  clearPassword();
  generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Defining arrays used throughout
var allCharacters = [];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '<', '>', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '<', '>']
var userPassword = []

// Defining global variables
var passLength;
var passLowercase;
var passUppercase;
var passNumbers;
var passSpecial;
var randomCharacter;
var password;

// Creates the password using user prompts
function generatePassword(){
  generateLength();
  password = userPassword.join('');
  return;
}

// What is the length of the password?
function generateLength() {
  response = prompt("How many characters long should the password be? (between 8-128 characters)")
  if (isNaN(response)) {
    alert("Not a number. Please try again.");
    generateLength();
  } else if (response === null) {
    return;
  } else if (response < 8) {
    alert("Please choose a longer password length.");
    generateLength();
  } else if (response > 128) {
    alert("Please choose a shorter password length.");
    generateLength();
  } else {
    passLength = parseInt(response)
    generateLowercase();           
  }
}

// Does the user want lowercase characters?
function generateLowercase() {
  passLowercase = prompt("Should the password have lowercase letters? (yes or no)"); 
  if (passLowercase === null) {
    return;
  } else if (passLowercase !== "yes" && passLowercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateLowercase();
  } else if (passLowercase === 'yes') {
    allCharacters = allCharacters.concat(lowerChar);
    console.log(allCharacters);
    generateUppercase();
  } else {
    generateUppercase();
  }
}

// Does the user want uppercase characters?
function generateUppercase() {
  passUppercase = prompt("Should the password have uppercase letters? (yes or no)");
  if (passUppercase === null) {
    return;
  } else if (passUppercase !== "yes" && passUppercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateUppercase();
  } else if (passUppercase === 'yes') {
    allCharacters = allCharacters.concat(upperChar);
    console.log(allCharacters);
    generateNumbers();
  } else {
    generateNumbers();
  }
}

// Does the user want numbers?
function generateNumbers() {
  passNumbers = prompt("Should the password have numbers? (yes or no)");
  if (passNumbers === null) {
    return;
  } else if (passNumbers !== "yes" && passNumbers !== "no") {
    alert("Please try again. Answer yes or no.");
    generateNumbers();
  } else if (passNumbers === 'yes') {
    allCharacters = allCharacters.concat(numbers);
    console.log(allCharacters);
    generateSpecialCharacters();
  } else {
    generateSpecialCharacters();
  }
}

// Does the user want special characters?
function generateSpecialCharacters() {
  passSpecial = prompt("Should the password have special characters? (yes or no)");
  if (passSpecial === null) {
    return;
  } else if (passSpecial !== "yes" && passSpecial !== "no") {
    alert("Please try again. Answer yes or no.");
    generateSpecialCharacters();
  } else if (passSpecial === 'yes') {
    allCharacters = allCharacters.concat(specialChar);
    console.log(allCharacters);
    validatePassword();
  } else {
    validatePassword();
  }
}

// Checks if the password has at least one set of characters selected.
function validatePassword() {
  if (passLowercase === 'no' && passUppercase === 'no' && passNumbers === 'no' && passSpecial === 'no') {
    alert("You need to select 'yes' to one of the prompts. Please try again!");
    generateLowercase();
  } else {
    createPassword();
  }
}

// If validated, grab random characters from the allCharacters array so the password has the specified length.
function createPassword() {
  var index = getRandomNumber(0, allCharacters.length - 1);
  randomCharacter = allCharacters[index];
  userPassword.push(randomCharacter);
  if (userPassword.length !== passLength) {
    createPassword();
  } else if (userPassword.length === passLength) {
    return
  }
}

// Random number generator used in the function above
function getRandomNumber(min, max){
  var random = Math.floor(Math.random() * (max - min + 1) + min)
  return random;
}

// Function used at the start of writePassword function to make sure both the userPassword array and the allCharacters array are empty and ready to receive characters.
function clearPassword(){
  userPassword = [];
  allCharacters = [];
}