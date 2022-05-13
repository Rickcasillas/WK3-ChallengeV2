// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("Password Must Be Between 8 and 20 Characters")
  confirm("Passwords may contain lowercase, uppercase, numbers, and special characters")


return "stay tuned";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
