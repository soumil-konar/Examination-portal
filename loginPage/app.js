//validation code for inputs.
var username = document.forms["form"]["username"];
var password = document.forms["form"]["password"];

var user_error = document.getElementById("username_error");
var pass_error = document.getElementById("pass_error");

username.addEventListener("textInput", user_verify);
password.addEventListener("textInput", pass_verify);

function validated() {
  if (username.value.length < 9) {
    username.style.border = " 1px solid red";
    user_error.style.display = "block";
    username.focus();
    return false;
  }
  if (password.value.length < 9) {
    password.style.border = " 1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}
function user_verify() {
  if (username.value.length >= 8) {
    username.style.border = " 1px solid silver";
    user_error.style.display = "none";
    return true;
  }
}
function pass_verify() {
  if (password.value.length >= 5) {
    password.style.border = " 1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}


function hideAndSeek(){
  var x = document.getElementById("password");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if(x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display ="none";
  }
  else{
    x.type = "password";
    y.style.display = "none";
    z.style.display ="block";
  }
}


// let yearElem = document.getElementById("year");
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// yearElem.innerHTML = currentYear;

// console.log(currentDate);