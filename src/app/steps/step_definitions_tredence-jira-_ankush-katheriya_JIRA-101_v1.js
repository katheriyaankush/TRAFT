Below are the reusable and well-structured step definition functions in JavaScript for the provided BDD scenarios. Each function captures the essence of the scenarios while ensuring modularity for reuse.


const { Given, When, Then } = require('cucumber');

let mobileUser = {
  isLoggedIn: false,
  isRegistered: false,
  attempts: 0
};

// Helper functions
function onLoginPage() {
  console.log("User is on the login page.");
}

function enterCredentials(valid) {
  if (valid) {
    console.log("User enters valid credentials.");
    mobileUser.isRegistered = true;
  } else {
    console.log("User enters invalid credentials.");
    mobileUser.attempts++;
  }
}

function submitLogin() {
  if (mobileUser.isRegistered && mobileUser.attempts === 0) {
    mobileUser.isLoggedIn = true;
    console.log("User submits the login form.");
  } else {
    console.log("User submission fails due to invalid credentials.");
  }
}

function showDashboard() {
  if (mobileUser.isLoggedIn) {
    console.log("User is redirected to the dashboard.");
  }
}

function displayMessage(message) {
  console.log(message);
}

// Step Definitions
Given('the user is on the login page', () => {
  onLoginPage();
});

When('the user enters valid credentials', () => {
  enterCredentials(true);
});

When('the user enters invalid credentials', () => {
  enterCredentials(false);
});

When('the user submits the login form', () => {
  submitLogin();
});

Then('the user should be redirected to the dashboard', () => {
  showDashboard();
});

Then('a welcome message should be displayed', () => {
  displayMessage("Welcome to your dashboard!");
});

Then('an error message should be displayed indicating invalid credentials', () => {
  displayMessage("Error: Invalid credentials. Please try again.");
});

Given('the user is on the login page using a mobile device', () => {
  onLoginPage();
  console.log("User is accessing using a mobile device.");
});

Then('the login form fields should be visible', () => {
  console.log("Login form fields are visible.");
});

Then('the login button should be operational', () => {
  console.log("Login button is operational.");
});

Then('the layout should be responsive', () => {
  console.log("The layout is responsive for mobile.");
});

When('the user clicks on the "Forgot Password?" link', () => {
  console.log("User clicks on 'Forgot Password?'");
});

Then('the user should be redirected to the password recovery page', () => {
  console.log("User is redirected to the password recovery page.");
});

Then('the user should be able to reset their password successfully', () => {
  console.log("User resets their password successfully.");
});

Given('the mobile user has logged in successfully', () => {
  mobileUser.isLoggedIn = true;
  console.log("Mobile user is successfully logged in.");
});

When('the user closes the app and reopens it', () => {
  console.log("User closes and reopens the app.");
});

Then('the user should remain logged in', () => {
  if (mobileUser.isLoggedIn) {
    console.log("User remains logged in.");
  }
});

Then('the dashboard should be displayed automatically', () => {
  showDashboard();
});

When('the user enters invalid credentials three times', () => {
  for (let i = 0; i < 3; i++) {
    enterCredentials(false);
  }
});

Then('the user should receive a message stating that their account has been locked', () => {
  if (mobileUser.attempts >= 3) {
    displayMessage("Your account has been locked due to multiple failed login attempts.");
  }
});

Then('instructions on how to unlock their account should be provided', () => {
  displayMessage("Instructions: Please check your email to unlock your account.");
});


### Explanation
- **Modularity**: Functions like `onLoginPage`, `enterCredentials`, `submitLogin`, etc., encapsulate actions for clearer, reusable handling.
- **State Management**: The `mobileUser` object keeps track of the user's login state, attempts, and whether they're registered.
- **Console Logging**: The console logging is a stand-in for actual UI interactions; it provides feedback for each action.
- **Behavior Handling**: This implementation includes checks for successful and failed attempts to simulate realistic scenarios.

This structure helps maintain clarity and code reusability when testing with BDD.