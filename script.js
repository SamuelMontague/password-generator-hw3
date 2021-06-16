// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercaseChar ="abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalChar = "0123456789"
var specialchar = "!@#$%^&*()'=+-_/<>?[\]{~}"
var selection = "";

  generateBtn.addEventListener("click", function () {
  var ps= generatePassword();
  document.getElementById("password").value = ps;
  });
//
// Write password to the #password input
function generatePassword() {

  var password = [];

  var passwordlengthuser = prompt("how many characters for your password? 8-128");
  passwordlengthuser = parseInt(passwordlengthuser);

  if (passwordlengthuser < 8) {
    alert("Password must have 8 or more characters.");
    return "";
  }

  if (passwordlengthuser > 128) {
    alert("Password must have 128 or less characters.");
    return "";
  }

  var lowercasecharacterschosen = window.confirm("Use lowercase characters?");

  if (lowercasecharacterschosen) {
    selection += lowercaseChar;
    
  }

  var uppercasecharacterschosen = window.confirm("Use uppercase characters?");

  if (uppercasecharacterschosen) {
    selection += uppercaseChar;
  }

  var numericalcharacterschosen = window.confirm("Use numbers?");

  if (numericalcharacterschosen) {
    selection += numericalChar;
  }

  var specialcharchosen = window.confirm("Use symbols?");

  if (specialcharchosen) {
    selection += specialchar;
  }

   for (var i = 0; i < passwordlengthuser; i++) {
    var pickpassword = selection[Math.floor(Math.random() * selection.length)];
      console.log(pickpassword);
      password.push(pickpassword);
  }
    
    return password.join('');
}


  function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("generate");
  }
