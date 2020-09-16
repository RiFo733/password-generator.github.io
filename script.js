var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()-=`~{[}]|\;:'<,>.?/";

generateBtn.addEventListener("click", writePassword);

function writePassword() {

  let newPassword = "";
  let passwordPhrase = "";

  let passwordLength = prompt("Please choose from 8 to 128 characters for password legnth.")

  if (Number(passwordLength < 8) | Number (passwordLength > 128) | isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128!");
    return;
  }

  let lowercaseInput = confirm ("Include lowercase?");

  if (lowercaseInput) {
    passwordPhrase += lowercase;
  }

  let uppercaseInput = confirm ("Include uppercase?");

  if (uppercaseInput) {
    passwordPhrase += uppercase;
  }

  let numbersInput = confirm ("Include numbers?");

  if (numbersInput) {
    passwordPhrase += numbers;
  }

  let specialInput = confirm ("Include special?");

  if (specialInput) {
    passwordPhrase += special;
  }

  if (Number(passwordLength >= 8) && Number (passwordLength <= 128)) {
    for (var i = 0; i < passwordLength; i++){
      newPassword += passwordPhrase.charAt(Math.floor(Math.random() * passwordPhrase.length));
    };
  
    document.getElementById("password").value = newPassword

  };



};


