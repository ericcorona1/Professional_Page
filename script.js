// form items
const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitDiv = document.getElementById("form-btn");
const confirmation = document.getElementById("confirmation");

// checkbox items
const checkbox = document.getElementById("nav-toggle");
const navlinks = document.querySelectorAll(".navbar li a");

console.log(navlinks);

// toggle checkbok on click
const toggleNavbar = () => {
  checkbox.checked = false;
};

// Nav toggle event listener
navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNavbar();
  });
});

// Show input error message
function showError(input, notification) {
  const formControl = input.parentElement;
  formControl.className = "form-section error";
  const small = formControl.querySelector("small");
  small.innerText = notification;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-section success";
}

// Show confirmation, need to complete
function showConfirmation(notification) {
  submitDiv.className = "form-btn success";
  confirmation.innerText = notification;
}

//Check email is valid
function checkEmail(input) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value.trim())) {
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

// Check that all pass
function checkPassing(inputArr) {
  const allHaveClass = inputArr.every((value) => {
    return value.parentElement.classList.contains("success");
  });
  if (allHaveClass) {
    showConfirmation("Message sent successfully!");
    return true;
  }
}

//Form event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkRequired([fullName, email, message]);
  checkLength(fullName, 3);
  checkLength(message, 3);
  checkEmail(email);
  checkPassing([fullName, email, message]);

  if (checkPassing([fullName, email, message])) {
    form.submit();
  }
});
