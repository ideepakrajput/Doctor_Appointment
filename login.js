function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let items of errors) {
    items.innerHTML = "";
  }
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  var user = document.forms["login"]["log-user"].value;
  if (user.length <= 3) {
    seterror("user", "*Username must be greater than 5 letter");
    returnval = false;
  }

  var password = document.forms["login"]["log-password"].value;
  if (password.length < 8) {
    seterror("password", "*Password must be greater than or equal to 8 letter");
    returnval = false;
  }

  return returnval;
}
