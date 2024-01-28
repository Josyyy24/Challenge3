// Assignment code here
var generateBtn = document.querySelector("#generate");

//
function generatePassword() {
  var passLength = prompt("Your password must be between 8 to 128 characters long. Please enter your requested length of password.");
 
  //if statement 
  if (isNaN(passLength)) {
    alert("Please enter a number of desired length.");
    return
  }

  //password compliance for length selected.
  if (passLength < 8 || passLength > 128) {
    alert("Your requested password length does not meet the criteria.");
    return
  }

  //confirm prompts.
  var upCase = confirm("Your password must include at least one capital letter.");
  var lowCase = confirm("Your password must contain at least one lowercase letter.");
  var numCase = confirm("Your password must contain at least one number.");
  var specialCase = confirm("Your password must contain at least one special character.")

  //What can be used in password.
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "~!@#$%^&*()";
  var multiSelect = "";

  //Criteria to create a password.
  if (upCase) {
    multiSelect += uppercase;
  }
  if (lowCase) {
    multiSelect += lowercase;
  }
  if (numCase) {
    multiSelect += numbers;
  }
  if (specialCase) {
    multiSelect += special;
  }
  let confirmedPass = "";
  for (i = 0; i < passLength; i++) {
    let range = [Math.floor(Math.random() * multiSelect.length)];
    confirmedPass = confirmedPass + multiSelect[range];
  }
  return confirmedPass;
};

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
