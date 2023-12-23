// Assignment code here
const numbers = "1,2,3,4,5,6,7,8,9"
const special = ""
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var length = 8
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(numbers,special,letters) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

