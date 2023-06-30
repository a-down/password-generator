// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  clearPassword();
  generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var allCharacters = [];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '<', '>', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '<', '>']
var userPassword = []

var passLength;
var passLowercase;
var passUppercase;
var passNumbers;
var passSpecial;
var randomCharacter;
var password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  generateLength();
  generateLowercase();
  generateUppercase();
  generateNumbers();
  generateSpecialCharacters();
  createPassword();
  password = userPassword.join('');
  return;
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
  } else if (passLowercase === 'yes') {
    allCharacters = allCharacters.concat(lowerChar);
    console.log(allCharacters);
    return
  } else {
    return
  }
}

//  uppercase?
function generateUppercase() {
  passUppercase = prompt("Should the password have uppercase letters? (yes or no)");
  if (passUppercase !== "yes" && passUppercase !== "no") {
    alert("Please try again. Answer yes or no.");
    generateUppercase();
  } else if (passUppercase === 'yes') {
    allCharacters = allCharacters.concat(upperChar);
    console.log(allCharacters);
    return;
  } else {
    return
  }
}

//  numbers?
function generateNumbers() {
  passNumbers = prompt("Should the password have numbers? (yes or no)");
  if (passNumbers !== "yes" && passNumbers !== "no") {
    alert("Please try again. Answer yes or no.");
    generateNumbers();
  } else if (passNumbers === 'yes') {
    allCharacters = allCharacters.concat(numbers);
    console.log(allCharacters);
    return;
  } else {
    return
  }
}

//  special characters?
function generateSpecialCharacters() {
  passSpecial = prompt("Should the password have special characters? (yes or no)");
  if (passSpecial !== "yes" && passSpecial !== "no") {
    alert("Please try again. Answer yes or no.");
    generateSpecialCharacters();
  } else if (passSpecial === 'yes') {
    allCharacters = allCharacters.concat(specialChar);
    console.log(allCharacters);
    return;
  } else {
    return
  }
}

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

// while i < passlenth


function getRandomNumber(min, max){
  var random = Math.floor(Math.random() * (max - min + 1) + min)
  return random;
}

function clearPassword(){
  userPassword = [];
  allCharacters = [];
}