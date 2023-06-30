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
    console.log(passLowercase);   //  console.log -- delete later
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
    console.log(passUppercase);   //  console.log -- delete later
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
    console.log(passNumbers);   //  console.log -- delete later
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
    console.log(passSpecial);   //  console.log -- delete later
  }
}

//  after all prompts, password is generated
//  consider what qualities it needs
//  consider how many characters it wants

//  IF ALL YES, 25% of the password for each into the password array
      //  So if the person wants 8 characters and they want all 4 qualities, then 2 random lowercase, 2 random uppercase, 2 random special, and 2 random numbers go into the password array. 
      //   THEN, those values in the array are sorted randomly to create the password.

//  IF 3 ARE YES, 33% of the password for each into the password array

//  IF 2 ARE YES, 50% of the password for each into the password array

//  IF 1 IS YES, 100% of the password for each into the password



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);