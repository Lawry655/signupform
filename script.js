function validateAndstoredata() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phonenumber = document.getElementById("phonenumber").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  const recaptchaResponse = grecaptcha.getResponse();

  // simple validation //
  if (
    name === "" ||
    email === "" ||
    phonenumber === "" ||
    password === "" ||
    confirmpassword === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  // reCAPTCHA validation
  if (recaptchaResponse.length === 0) {
    alert("Please complete the reCAPTCHA");
    return;
  }

  // Store data in local storage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phonenumber", phonenumber);
  localStorage.setItem("password", password);
  localStorage.setItem("confirmpassword", confirmpassword);
}

document
  .getElementById("submit")
  .addEventListener("click", validateAndstoredata);

document.getElementById("submitted").addEventListener("click", loaduserdata);
