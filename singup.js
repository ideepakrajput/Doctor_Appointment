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

function validateForm_sign() {
  var returnval = true;
  clearErrors();

  var suser = document.forms["signup"]["sign-user"].value;
  if (suser.length <= 3) {
    seterror("suser", "*Username must be greater than 5 letter");
    returnval = false;
  }

  var sign_password = document.forms["signup"]["sign-password"].value;
  if (sign_password.length < 8 || sign_password == null) {
    seterror(
      "spassword",
      "*Password must be greater than or equal to 8 letter"
    );
    returnval = false;
  }
  var cpassword = document.forms["signup"]["conf-password"].value;
  if (cpassword != sign_password) {
    seterror("cpassword", "*Password doesn't match");
    returnval = false;
  }

  return returnval;
}
