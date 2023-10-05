// Assignment code here
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwordLength = parseInt(
    prompt ("How many characters would you like your password to contain? [8-128]")
  );

  if (
    isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
    {
    alert('you must choose again...');
    return;
  }

  var includeSpecial = confirm(
    "Click ok to confirm including special characters."
  );
  var includeNumeric = confirm(
    "Click ok to confirm including numeric characters."
  );
  var includeLowercase = confirm(
    "Click ok to confirm including lowercase characters."
  );
  var includeUppercase = confirm(
    "Click ok to confirm including uppercase characters."
  );

  if (
    !includeSpecial && 
    !includeNumeric && 
    !includeLowercase && 
    !includeUppercase
  ) {
    alert ("At least one character type must be selected."
    );
    return;
  }

  var criteria = {
    passwordLength: passwordLength,
    includeSpecial: includeSpecial,
    includeNumeric: includeNumeric,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
  };
  
  var newPassword = generatePassword(criteria)
  password.value = newPassword
}

function generatePassword(criteria){
  var specialCharacters = " !'?{}><;:+=_-)(";
  var numericCharacters = "0123456789";
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  var characterTypes = "";

  if (criteria.includeSpecial) {
   characterTypes += specialCharacters;
  }
  if (criteria.includeNumeric) {
   characterTypes += numericCharacters;
  }
  if (criteria.includeLowercase) {
    characterTypes += lowercaseCharacters;
  }
  if (criteria.includeUppercase) {
    characterTypes += uppercaseCharacters
  }

  var newPassword = ""; 
  for (var i = 0; i < criteria.passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterTypes.length);
    newPassword += characterTypes.charAt(randomIndex);
  }

  return newPassword;

}


  
  

  