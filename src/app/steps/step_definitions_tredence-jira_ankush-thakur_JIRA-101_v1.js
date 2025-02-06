Below are the JavaScript step definition functions for the BDD scenarios provided in Gherkin format. These functions are structured to be reusable and maintainable, making them suitable for a testing framework such as Cucumber.js.


const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

// Assuming we have a helper function to simulate user interactions and checks.
const userHelper = require('./userHelper'); 

Given('I am on the mobile login page', async function () {
    await userHelper.navigateToMobileLoginPage();
});

When('I enter valid credentials', async function () {
    await userHelper.enterCredentials('validUsername', 'validPassword');
});

When('I enter invalid credentials', async function () {
    await userHelper.enterCredentials('invalidUsername', 'invalidPassword');
});

When('I click the login button', async function () {
    await userHelper.clickLoginButton();
});

When('I click on the "Forgot Password?" link', async function () {
    await userHelper.clickForgotPasswordLink();
});

Then('I should be redirected to the mobile user dashboard', async function () {
    const isDashboardVisible = await userHelper.checkDashboardVisibility();
    expect(isDashboardVisible).to.be.true;
});

Then('I should see a welcome message', async function () {
    const message = await userHelper.getWelcomeMessage();
    expect(message).to.include('Welcome');
});

Then('I should remain on the mobile login page', async function () {
    const isLoginPageVisible = await userHelper.checkLoginPageVisibility();
    expect(isLoginPageVisible).to.be.true;
});

Then('I should see an error message indicating incorrect username or password', async function () {
    const errorMessage = await userHelper.getErrorMessage();
    expect(errorMessage).to.include('incorrect username or password');
});

Then('the login page should be displayed with the correct layout for mobile devices', async function () {
    const isLayoutCorrect = await userHelper.checkLoginPageLayout();
    expect(isLayoutCorrect).to.be.true;
});

Then('the "login" button should be clearly visible', async function () {
    const isButtonVisible = await userHelper.checkButtonVisibility('login');
    expect(isButtonVisible).to.be.true;
});

Then('I should be navigated to the password recovery page', async function () {
    const isRecoveryPageVisible = await userHelper.checkRecoveryPageVisibility();
    expect(isRecoveryPageVisible).to.be.true;
});

Then('I should see a field to enter my email address', async function () {
    const isEmailFieldVisible = await userHelper.checkEmailFieldVisibility();
    expect(isEmailFieldVisible).to.be.true;
});

When('I enter invalid credentials three times', async function () {
    for (let i = 0; i < 3; i++) {
        await userHelper.enterCredentials('invalidUsername', 'invalidPassword');
        await userHelper.clickLoginButton();
    }
});

Then('my account should be temporarily locked', async function () {
    const isAccountLocked = await userHelper.checkAccountLockStatus();
    expect(isAccountLocked).to.be.true;
});

Then('I should see a message informing me of the lockout and instructions to unlock it', async function () {
    const lockoutMessage = await userHelper.getLockoutMessage();
    expect(lockoutMessage).to.include('Your account has been locked');
});

When('I select the "Remember me" checkbox', async function () {
    await userHelper.selectRememberMeCheckbox();
});

Then('I should be logged in without having to enter my credentials on my next visit', async function () {
    const isLoggedIn = await userHelper.checkLoginStatus();
    expect(isLoggedIn).to.be.true;
});

Given('I am logged into the mobile user dashboard', async function () {
    await userHelper.login('validUsername', 'validPassword');
});

When('I remain inactive for a period set for session timeout', async function () {
    await userHelper.setSessionTimeout();
});

Then('I should be logged out automatically', async function () {
    const isLoggedOut = await userHelper.checkLoginStatus();
    expect(isLoggedOut).to.be.false;
});

Then('I should be redirected to the mobile login page with a session timeout message', async function () {
    const isLoginPageVisible = await userHelper.checkLoginPageVisibility();
    expect(isLoginPageVisible).to.be.true;
    const timeoutMessage = await userHelper.getTimeoutMessage();
    expect(timeoutMessage).to.include('Session has timed out');
});


### Explanation:
- Each step definition is clearly laid out to represent its corresponding Gherkin step.
- Reusable functions are invoked from a `userHelper` module, which would contain the actual implementation details for operations like navigating to pages, entering credentials, checking the visibility of elements, etc. 
- Assertions are done using `chai` to verify the expected outcomes, allowing for easy integration into a testing framework.
- These step definitions can be extended with more utility functions in the `userHelper` to handle common tasks, making the overall structure maintainable and clean.