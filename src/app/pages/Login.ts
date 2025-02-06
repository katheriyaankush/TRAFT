import UIActions from '../../support/playwright/actions/UIActions';
import Assert from '../../support/playwright/assertions/Assert';

export class LoginPage {
  constructor(private web: UIActions) {}

  private Locators = {
    signInBtn: 'button[type="submit"]',
    userNameTxt: 'input[type="email"]',
    passwordTxt: 'input[type="password"]',
    nextBtn: 'input[type="submit"]',
    displayName: '#displayName',
    forgotPwdLink: '#idA_PWD_ForgotPassword',
    pickUseAnotherAccount: '#otherTile',
    pickAccountToSignIn: (emailName: string) => `[aria-label="Sign in ${emailName} work or school account."]`,
    pickAccountToSignOut: (emailName: string) => `[aria-label="Sign out ${emailName} work or school account."]`,
  };

  public async ssoMicrosoftLogin(userName: string, password: string) {
    await web.goto(process.env.BASE_URL, 'Login page');
    await web.element(this.Locators.signInBtn, 'Sign in with Microsoft').click();
    try {
      await web.element(this.Locators.pickUseAnotherAccount, 'Use another account').click();
    } catch (e) {
      console.log('Pick account is not appeared');
    }
    await web.editBox(this.Locators.userNameTxt, 'User Email').fill(userName);
    await web.element(this.Locators.nextBtn, 'Next').click();
    await web.editBox(this.Locators.forgotPwdLink, 'Forgot Password Link').isVisible();
    await web.editBox(this.Locators.passwordTxt, 'Password').fill(password);
    await web.element(this.Locators.nextBtn, 'Next').click();
    await web.element(this.Locators.displayName, 'Stay Signed In').isVisible();
    await web.element(this.Locators.nextBtn, 'Next').click();
    await web.waitForURL(`${process.env.BASE_URL}/home`, 'Home page');
    await web.waitForResponse(`/da/restate`);
  }

  public async pickAccountToLogout(emailId = process.env.APP_USERNAME) {
    await web.element(this.Locators.pickAccountToSignOut(emailId), 'pick Account').click();
    await web.waitForLoadState();
  }
  public async isDisplayed() {
    await Assert.assertTrue(await web.element(this.Locators.signInBtn, 'Sign in with Microsoft').isVisible(), 'Login Page');
  }
}
