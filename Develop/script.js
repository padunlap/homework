// Assignment Code
var generateBtn = document.querySelector("#generate");

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
// Write password to the #password input
function generatePassword(pwlength) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var retVal = "";
  for (var i = 0; i < pwlength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}
function writePassword() {
  var pwCrit; 
  let validation = true;
  while(validation){
    pwCrit = window.prompt("Password Length? Between 8 - 128 characters");
    console.log(isNumeric(pwCrit))
    if (isNumeric(pwCrit) &&pwCrit<=128&&pwCrit>=8) {
      validation = false;
    }

  }
  var cwCrit;
  cwCrit = window.prompt("lowercase, uppercase, numeric, and/or special characters");
  console.log(cwCrit)
  var password = generatePassword(pwCrit);
  console.log(password);
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


