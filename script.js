  //Prompts
  var passwordLength = prompt("How many characters would you like your password to be?");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercase letters in your password?");

  var upperCases = confirm("Do you want uppercase letters in your password?");

  var special = confirm("Do you want special characters in your password?");
  //Minimum character count
  var minimumCount = 8;
  //Max character count
  var maximumCount = 128

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  const specialCharacters = "!@#$%^&*()";

  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters)]
    }

};
//User selected booleans
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

    var randomPasswordGenerated = "";


  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;



  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", password);

  function generateBtn(length, lower, upper, number, symbol) {
    let generateBtn= '';


  var password = generateBtn(length, lower, upper, number, symbol);
  var passwordText = document.querySelector("#generate");

  passwordText.value = password;
  return passwordGenerated;
}




