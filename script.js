const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const confirmation = document.getElementById("confirmation");

// Show input error message
function showError(input, notification) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = notification;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else {
    showSuccess(input);
  }
}

//Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Show confirmation, need to complete
function showConfirmation(input) {}

// Check that all pass
function checkPassing([inputArr]) {
  inputArr.forEach((input) => {
    if (input.className !== error) {
      showConfirmation(input);
    }
  });
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([fullName, email, message]);
  checkLength(fullName, 3);
  checkLength(message, 3);
  checkEmail(email);
  checkPassing([fullName, email, message]);
});
