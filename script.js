// Declare value
var passLength;
var confirmLowC;
var confirmUpC;
var confirmNum;
var confirmSpec;
var userChoice =[];
var emptyArr = [];

// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Pull up a prompt asking for the length of password
function generatePassword() {
  passLength = prompt("How many characters would you like your password to have?\nPlease enter a valid number between 8 and 128.");
  // The prompt will disappear after the user clicked "Cancel" button
  if (passLength === null) {
    return;
  }
  // Check to see if the user entered a valid number
  if (!Boolean(passLength)) {
    alert("Invalid answer, please try again");
    return;
  } else if (passLength < 8 || passLength > 128) {
    alert("Incorrect number, password must be between the length of 8 and 128.\nPlease try again.");
    return;
  }
  // After fulfilled the requirement, the user will be asked for criteria for their passwords
  else if (passLength >= 8 && passLength <= 128) {
      confirmLowC = confirm("Do you want your password to contain lowercases?");
      confirmUpC = confirm("Do you want your password to contain uppercases?");
      confirmNum = confirm("Do you want your password to contain numbers?");
      confirmSpec = confirm("Do you want your password to contain special characters?");
  };
  
  // If the user does not choose any option
  if (!confirmLowC && !confirmUpC && !confirmNum && !confirmSpec) {
    alert("Invalid answer, please choose at least one criterion!");
    return;
  }
  
  else if (confirmLowC) {
    userChoice = userChoice.concat(lowercase);
  }
  
  else if (confirmUpC) {
    userChoice = userChoice.concat(UpperCase);
  }
  
  else if (confirmNum) {
    userChoice = userChoice.concat(number);
  }
  
  else if (confirmSpec) {
    userChoice = userChoice.concat(specialChar);
  }

  for (var i = 0; i < passLength; i++) {
    var result = userChoice[Math.floor(Math.random() * userChoice.length)];
    emptyArr.push(result);
  }
  var password = emptyArr.join("");
  return password;
}
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
