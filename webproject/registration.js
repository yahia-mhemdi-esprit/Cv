
// registration.js

// Function to check if passwords are identical and display an alert
function passValidation() {
    // Get password values
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('cpass').value;

    // Check if passwords are not identical
    if (password !== confirmPassword) {
        alert('Error: Passwords do not match!');
    }
}

// Function to validate form fields on submit
function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validation for Name (only letters, at least 3 characters)
    var name = document.getElementById('fname').value;
    if (!/^[a-zA-Z]+$/.test(name) || name.length < 3) {
        alert('Error: Name must contain only letters and be at least 3 characters long.');
        return; // Stop further validation
    }

    // Validation for First Name (at least 4 characters)
    var firstName = document.getElementById('lname').value;
    if (firstName.length < 4) {
        alert('Error: First Name must be at least 4 characters long.');
        return;
    }

    // Validation for Phone Number (should not contain letters)
    var phoneNumber = document.getElementById('phone').value;
    if (/\D/.test(phoneNumber)) {
        alert('Error: Phone Number should not contain letters.');
        return;
    }

    // Validation for Password (at least 10 characters, one uppercase, one lowercase, one number)
    var password = document.getElementById('pass').value;
    if (password.length < 10 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
        alert('Error: Password must be at least 10 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
        return;
    }

    // Check if passwords are identical
    passValidation();

    // TODO: Add more validations for other fields as needed

    // Submit the form if all validations pass
    document.querySelector('form').submit();
}

// Add submit event listener to the form
document.querySelector('form').addEventListener('submit', validateForm);
// Function to validate name on keyup
function nameValidation() {
    var firstName = document.getElementById('fname').value;
    var firstNameError = document.getElementById('nameError');

    // Check if name has at least three characters and only letters
    if (/^[a-zA-Z]{3,}$/.test(firstName)) {
        // Display the correct word in green
        firstNameError.innerHTML = 'Correct';
        firstNameError.style.color = 'green';
    } else {
        // Display error message in red
        firstNameError.innerHTML = 'Error: Name must have at least three characters and contain only letters.';
        firstNameError.style.color = 'red';
    }
}

// registration.js

// Function to validate a field on keyup
function validateField(fieldId, minLength, pattern, errorMessage) {
    var fieldValue = document.getElementById(fieldId).value;
    var errorId = fieldId + 'Error';
    var errorElement = document.getElementById(errorId);

    if ((minLength === 0 || fieldValue.length >= minLength) && pattern.test(fieldValue)) {
        // Clear error message and show correct message in green
        errorElement.innerHTML = 'Correct';
        errorElement.style.color = 'green';
    } else {
        // Display error message in red
        errorElement.innerHTML = errorMessage;
        errorElement.style.color = 'red';
    }
}

// Function to validate password confirmation on keyup
function confirmPasswordValidation() {
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('cpass').value;
    var passwordError = document.getElementById('passError');

    if (password === confirmPassword) {
        // Clear error message
        passwordError.innerHTML = '';
    } else {
        // Display error message in red
        passwordError.innerHTML = 'Error: Passwords do not match.';
        passwordError.style.color = 'red';
    }
}

// Add onkeyup event listeners for each field
document.getElementById('fname').addEventListener('keyup', function () {
    validateField('fname', 3, /^[a-zA-Z]+$/, 'Error: First Name must contain only letters and be at least 3 characters long.');
});

document.getElementById('lname').addEventListener('keyup', function () {
    validateField('lname', 3, /^[a-zA-Z]*$/, 'Error: Last Name must be at least 3 characters long.');
});

document.getElementById('phone').addEventListener('keyup', function () {
    validateField('phone', 0, /^\d*$/, 'Error: Phone Number should only contain numbers.');
});

document.getElementById('pass').addEventListener('keyup', function () {
    validateField('pass', 8, /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Error: Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
});

document.getElementById('cpass').addEventListener('keyup', confirmPasswordValidation);

// Add submit event listener to the form
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // TODO: Add overall form validation if needed

    // Submit the form if all individual validations pass
    document.querySelector('form').submit();
});
    
// registration.js

function validateField(fieldId, minLength, pattern, errorMessage) {
    var fieldValue = document.getElementById(fieldId).value;
    var errorId = fieldId + 'Error';
    var errorElement = document.getElementById(errorId);

    if ((minLength === 0 || fieldValue.length >= minLength) && pattern.test(fieldValue)) {
        errorElement.innerHTML = ''; // Clear error message
        return true; // Field is valid
    } else {
        errorElement.innerHTML = errorMessage; // Display error message
        errorElement.style.color = 'red';
        return false; // Field is invalid
    }
}

function confirmPasswordValidation() {
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('cpass').value;
    var passwordError = document.getElementById('passError');

    if (password === confirmPassword) {
        passwordError.innerHTML = ''; // Clear error message
        return true; // Passwords match
    } else {
        passwordError.innerHTML = 'Error: Passwords do not match.'; // Display error message
        passwordError.style.color = 'red';
        return false; // Passwords do not match
    }
}

document.querySelector('form').addEventListener('submit', function (event) {
    // Reset all previous error messages
    document.querySelectorAll('.error').forEach(function (element) {
        element.innerHTML = '';
    });

    // Validate each field
    var isFirstNameValid = validateField('fname', 4, /^[a-zA-Z]+$/, 'Error: First Name must contain only letters and be at least 4 characters long.');
    var isLastNameValid = validateField('lname', 3, /^[a-zA-Z]*$/, 'Error: Last Name must be at least 3 characters long.');
    var isPhoneValid = validateField('phone', 0, /^\d*$/, 'Error: Phone Number should only contain numbers.');
    var isPasswordValid = validateField('pass', 10, /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Error: Password must be at least 10 characters long and include at least one uppercase letter, one lowercase letter, and one number.');
    var isPasswordMatch = confirmPasswordValidation();

    // Check if all validations pass
    if (!(isFirstNameValid && isLastNameValid && isPhoneValid && isPasswordValid && isPasswordMatch)) {
        event.preventDefault(); // Prevent form submission if any validation fails
    }
});
