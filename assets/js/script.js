// GLOBAL VARIABLES //
var lowerCaseLet = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "123456789".split("");
var specialChar = "!@#$%^&*()".split("");
var customArray = [];
var customPassword = [];

// function used to randomly select an index from an array
function randomValue(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? \nPlease choose a number between 8 and 128.")

  // Checks for appropriate and stores in passwordLength variable
  if (!passwordLength) {
    alert("Hmm... If you don't want a password then why did you come here?");
    return;
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmLower = confirm("Should your password have lower case letters?");
    var confirmUpper = confirm("Should your password have upper case letters?");
    var confirmNum = confirm("Should your password have numbers?");
    var confirmSpecial = confirm("Should your password have special characters?");
  } else {
    alert("The password length must be a numerical value between 8 and 128.");
    generatePassword();
  };

  // Reassigning the customArray based on boolean responses from user (I'm not proud of these 5 if statements... there must be a more efficient way.)
  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpecial) {
    alert("Are you serious? You must choose at least one type of character. Try again.");
    generatePassword();
  };
  if (confirmLower) {
    customArray = customArray.concat(lowerCaseLet);
  };
  if (confirmUpper) {
    customArray = customArray.concat(upperCaseLet);
  };
  if (confirmNum) {
    customArray = customArray.concat(num);
  };
  if (confirmSpecial) {
    customArray = customArray.concat(specialChar);
  };

  // Iterating through the customArray via the randomValue function, storing one random value per loop into the new customPassword array
  for (i = 0; i < passwordLength; i++) {
    customPassword.push(randomValue(customArray));
  };

  // Returning the customPassword array as an unspaced string
  return customPassword.join("");
};




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);