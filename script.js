// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercaseChar ="abcdefghijklmnopqrstuvwxyz".split("");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numericalChar = "0123456789".split("");
var specialchar = "!@#$%^&*()'=+-_/<>?[\]{~}".split("");
var selection = "";

  generateBtn.addEventListener("click", function () {
  ps= generatePassword();
  document.getElementById("password").placeholder = ps;
  });

// Write password to the #password input
function generatePassword() {

  var password = [];
  var passwordText = document.querySelector("#generate");

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
    passwordText += lowercaseChar;
    
  }

  var uppercasecharacterschosen = window.confirm("Use uppercase characters?");

  if (uppercasecharacterschosen) {
    passwordText += uppercaseChar;
  }

  var numericalcharacterschosen = window.confirm("Use numbers?");

  if (numericalcharacterschosen) {
    passwordText += numericalChar;
  }

  var specialcharchosen = window.confirm("Use symbols?");

  if (specialcharchosen) {
    passwordText += specialchar;
  }
  

  // else if for 4 confirms
  else if (lowercaseChar && uppercaseChar && numericalChar && specialchar) {
        selection = specialchar.concat(lowercaseChar, uppercaseChar, numericalChar);
  }


  // else if for 3 confirms
  else if (lowercaseChar && uppercaseChar && numericalChar) {
      selection = numericalChar.concat(lowercaseChar, uppercaseChar);
  }

  else if (lowercaseChar && uppercaseChar && specialchar) {
      selection = specialchar.concat(lowercaseChar, uppercaseChar );
  }

  else if (uppercaseChar && numericalChar && specialchar) {
    selection = specialchar.concat( uppercaseChar, numericalChar);
  }

  else if (lowercaseChar && numericalChar && specialchar) {
  selection = specialchar.concat(lowercaseChar, numericalChar);
  }

  // else if 2 confirms
    else if (lowercaseChar && specialchar) {
      selection = specialchar.concat(lowercaseChar);

    }
    else if ( uppercaseChar && specialchar) {
      selection = specialchar.concat(uppercaseChar);

    }
    else if (numericalChar && specialchar) {
      selection = specialchar.concat(numericalChar);

    }
    else if (lowercaseChar && uppercaseChar) {
      selection = uppercaseChar.concat(lowercaseChar);

    }
    else if (uppercaseChar && numericalChar) {
      selection = numericalChar.concat( uppercaseChar);

    }
    else if (lowercaseChar && numericalChar) {
      selection = numericalChar.concat(lowercaseChar);
    }
    else if (lowercaseChar) {
      selection = lowercaseChar;
    }
    else if (uppercaseChar) {
      selection = uppercaseChar;
    }
    else if (numericalChar) {
      selection = numericalChar;
    }
    else if (specialChar) {
      selection = specialChar;
    }

  for (var i = 0; i < passwordlengthuser; i++) {
    var pickpassword = selection[Math.floor(Math.random() * selection.length)];
      password.push(pickpassword);
  }

  function userInput(ps) {

    document.getElementById("password").textContent = ps;
    }

  var copy = document.querySelector("#generate");
  copy.addEventListener("click", function() {
    copyPassword();
  } );

  function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("generate");
  };
}