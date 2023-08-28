
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    let isValid = true;
  
    // Reset previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("numberError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    // Validate Name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }
  
    // Validate Email
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").textContent = "Invalid email format";
      isValid = false;
    }
  
    // Validate Number (You can add more specific validation rules)
    if (number === "") {
      document.getElementById("numberError").textContent = "Number is required";
      isValid = false;
    }
  
    // Validate Password (You can add more specific validation rules)
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required";
      isValid = false;
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  













function hrefFunction(){
            windows.location.href = "index.html";
        }

let signUp = document.getElementById('signUp');
let signIn = document.getElementById('signIn');
let title = document.getElementById('title');
let formBox = document.getElementById('formBox');
let nameField = document.getElementById('nameField');
let countryField = document.getElementById('countryField');
let numberField = document.getElementById('numberField');


signIn.onclick = function(){
    nameField.style.maxHeight = "0";
    countryField.style.maxHeight = "0";
    numberField.style.maxHeight = "0";
    formBox.style.maxHeight = "500px";
    title.innerHTML = "Sign In";
    signUp.classList.add('useful');
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
    signIn.classList.add('useful');
}

signUp.onclick = function(){
    nameField.style.maxHeight = "60px";
    countryField.style.maxHeight = "60px";
    numberField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    formBox.style.maxHeight = "800px";
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
    signIn.classList.remove('useful');
    signUp.classList.remove('useful');
}