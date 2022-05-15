// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("Password Must Be Between 8 and 128 Characters")
  confirm("Passwords may contain lowercase, uppercase, numbers, and special characters")
  
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").value;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@()*#@&-";
  var passwordLength = 15;


  for(var i = 0; i < passwordLength; i++){
    var index = math.floor(math.random() * chars.passwordLength);
    passwordText = chars[index];
  }

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
