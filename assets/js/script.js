// GLOBAL VARIABLES //
var lowerCaseLet = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var num = "123456789".split("");
var specialChar = "!@#$%^&*()".split("");

// function used to randomly select an index from an array
function randomValue(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatePassword() {
  // Two custom arrays that clear each time the function is called.
  // One for the user's type selections, the other for the randomly selected characters.
  var chosenCharTypes = [];
  var customPassword = [];
  var passwordLength = null;
  var confirmLower = null;
  var confirmUpper = null;
  var confirmNum = null;
  var confirmSpecial = null;

  var passwordLength = prompt("How many characters would you like your password to be? \nPlease choose a number between 8 and 128.");
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
    chosenCharTypes = chosenCharTypes.concat(lowerCaseLet);
  };
  if (confirmUpper) {
    chosenCharTypes = chosenCharTypes.concat(upperCaseLet);
  };
  if (confirmNum) {
    chosenCharTypes = chosenCharTypes.concat(num);
  };
  if (confirmSpecial) {
    chosenCharTypes = chosenCharTypes.concat(specialChar);
  };

  // Iterating through the customArray via the randomValue function, storing one random value per loop into the new customPassword array
  for (i = 0; i < passwordLength; i++) {
    customPassword.push(randomValue(chosenCharTypes));
  };

  // Returning the customPassword array as an unspaced string
  return customPassword.join("");
};




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = null;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password == undefined) {
    passwordText.value = "Your Secure Password";
  } else {
    passwordText.value = password
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);