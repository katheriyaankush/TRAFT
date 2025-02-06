import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages';

Given('User logins to application', async function () {
  await new LoginPage(web).ssoMicrosoftLogin(process.env.APP_USERNAME, process.env.APP_PASSWORD);
});

When('User picks the account to signOut', async function () {
  await new LoginPage(web).pickAccountToLogout();
});

Then('User is able to see the Login page', async function () {
  await new LoginPage(web).isDisplayed();
});
