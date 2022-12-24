// grab sign up form
const signUpForm = document.getElementById("sign-up-form");
document.getElementById("close-btn").addEventListener("click", () => {
  if (confirm("Close Sign Up") === true) {
    signUpForm.remove();
  }
});

