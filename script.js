// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate random password
function generatePassword(){
  
  // Character type criterias
  var lowercase = "qwertyuiopasdfghjklzxcvbnm";
  var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var numeric = "1234567890";
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  // String contains selected criterias from the user 
  var passwordPool = "";
  
  // counter that increnent by 1 if the user choose a Character type criterias
  var criteria = 0;

  // ask user to input a number as the length of the random password
  var length = prompt("Please input a password length between 8 to 126");
  console.log(length);
  
  // ask user to confirm which Character type criterias to use
  confirmLower = confirm("do you want to include lowercase character in your password?")
  if (confirmLower == true){
    passwordPool += lowercase;
    criteria ++ ;
    console.log(passwordPool);
  }
  
  confirmUpper = confirm("do you want to include uppercase character in your password?")
  if (confirmUpper  == true){
    passwordPool += uppercase;
    criteria ++ ;
    console.log(passwordPool);
  }
  confirmNumeric = confirm("do you want to include number in your password?")
  if (confirmNumeric == true){
    passwordPool += numeric;
    criteria ++ ;
    console.log(passwordPool);
  }
  
  confirmSpecial = confirm("do you want to include special character in your password?")
  if (confirmSpecial == true){
    passwordPool += special;
    criteria ++ ;
    console.log(passwordPool);
  }
  
  // function to generate a random password based on user input and confirmation if criterias were met 
  if (length >= 8 && length <= 128 && criteria !== 0){
    var newPassword = "";
    for (var i = 0; i < length; i++){
       newPassword += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
      }
      return newPassword
    
      // if criterias were not met, alert user to try again
    } else{
      alert("you did not choose a valid criteria for your random password, please try again!")
    }
}




