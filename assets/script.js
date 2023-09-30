// Assignment code here

var lengthPassword = "8-128 characters"
var characterType = "lowercase, uppercase, numeric, and/or special characters"

var a = 8
var b = 128

var expression1 = (a<=b);
var expression2 = (a>=b);

var x = 0

var expression1 = (x <= 8);
var expression2 = (x >= 128);

if (expression1 && expression2) {
  console.log("Valid Valid");
} else if (expression1) {
  console.log("Valid Invalid");
} else if (expression2) {
  console.log("Invalid Valid");
} else {
  console.log("Invalid Invalid")
}

console.log(expression1 && expression2)
console.log(expression1 || expression2)
console.log(generate a strong password that meets greater security)

if

// program to figure out if we're hungry

// program to generate password

var passwordLength = 8
var ispassword = true
var 

if (passwordlength <=8) {
  console.log("valid");
}
if (passwordLength >8) {
  console.log("invalid")
}

if (ispassword === true) {
  console.log("password");
} else {
  console.log("No Password")
}

if (ispassword) {
  console.log("Password")
} else {
  console.log("No Password")
}

if (!ispassword) {
  console.log("No Password")
} else {
  console.log("Password")
}

if (passwordLength <=8) {
  console.log("valid")
} else if (passwordLength <= 8 && passwordLength >=128) {
  console.log("valid");
} else {
  console.log("invalid")
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page 
*/
