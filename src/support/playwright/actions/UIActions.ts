import { Page } from "@playwright/test";
import CommonConstants from "../../constants/CommonConstants";
import Log from "../../logger/Log";
import AlertActions from "./AlertActions";
import CheckBoxActions from "./CheckBoxActions";
import DropDownActions from "./DropDownActions";
import EditBoxActions from "./EditBoxActions";
import UIElementActions from "./UIElementActions";
import WebTableActions from "./WebTableActions";
import MoveActions from "./MoveActions";
import { exec } from 'child_process';
export default class UIActions {
  private elementAction: UIElementActions;
  private editBoxAction: EditBoxActions;
  private checkboxAction: CheckBoxActions;
  private dropdownAction: DropDownActions;
  private alertAction: AlertActions;
  private webTableAction: WebTableActions;
  private moveActions: MoveActions;

  constructor(private page: Page) {
    this.elementAction = new UIElementActions(page);
    this.editBoxAction = new EditBoxActions(page);
    this.checkboxAction = new CheckBoxActions();
    this.dropdownAction = new DropDownActions();
    this.alertAction = new AlertActions(page);
    this.webTableAction = new WebTableActions(page);
    this.moveActions = new MoveActions(page);
  }

  /**
   * Returns page object
   * @returns
   */
  public getPage(): Page {
    return this.page;
  }

  /**
   * Sets the page
   * @param page
   */
  public setPage(page: Page) {
    this.page = page;
    this.elementAction = new UIElementActions(page);
    this.editBoxAction = new EditBoxActions(page);
    this.alertAction = new AlertActions(this.page);
  }

  /**
   * Close page
   * @returns
   */
  public closePage() {
    this.page.close();
  }

  /**
   * Returns the instance of Alert
   * @returns
   */
  public alert() {
    return this.alertAction;
  }

  /**
   * Returns the instance of edit box actions
   * @param selector
   * @param description
   * @returns
   */
  public editBox(selector: string, description: string) {
    return this.editBoxAction.setEditBox(selector, description);
  }

  /**
   * Returns the instance of UIElements actions
   * @param selector
   * @param description
   * @returns
   */
  public element(selector: string, description: string) {
    return this.elementAction.setElement(selector, description);
  }

  /**
   * Returns the instance of Dropdown actions
   * @param selector
   * @param description
   * @returns
   */
  public dropdown(selector: string, description: string) {
    return this.dropdownAction.setLocator(this.elementAction.setElement(selector, description).getLocator(), description);
  }

  /**
   * Returns the instance of WebTable actions
   * @param selector
   * @param description
   * @returns
   */
  public table(selector: string, description: string) {
    return this.webTableAction.setLocator(this.elementAction.setElement(selector, description).getLocator(), description);
  }

    /**
   * Returns the instance of Move actions
   * @param selector
   * @param description
   * @returns
   */
    public moveElement(selector: string, description: string) {
      return this.moveActions.setLocator(this.elementAction.setElement(selector, description).getLocator(), description);
    }

  /**
   * Returns the instance of CheckBox actions
   * @param selector
   * @param description
   * @returns
   */
  public checkbox(selector: string, description: string) {
    return this.checkboxAction.setLocator(this.elementAction.setElement(selector, description).getLocator(), description);
  }

  /**
   * Navigate to specified URL
   * @param URL
   * @param description
   */
  public async goto(URL: string, description: string) {
    Log.info(`Navigate to ${description}`);
    await this.page.goto(URL, {timeout: CommonConstants.WAIT, waitUntil: "load"});
  }

  /**
   * Fetch the Current URL
   */
  public async getCurrentUrl() {
    const url = await this.page.url();
    Log.info(`CURRENT URL: ${url}`);
    return url;
  }

  /**
   * Navigate to previous URL
   * @param description
   */
  public async goBack(description: string) {
    Log.info(`Go to the previous ${description}`);
    await this.page.goBack({ timeout: CommonConstants.WAIT, waitUntil: "load" });
  }

  /**
   * Navigate to next URL
   * @param description
   */
  public async goForward(description: string) {
    Log.info(`Go to the next ${description}`);
    await this.page.goForward({ timeout: CommonConstants.WAIT, waitUntil: "load" });
  }

  /**
   * Page Refresh
   */
  public async pageRefresh() {
    Log.info(`Page Refresh`);
    await this.page.reload({ timeout: CommonConstants.WAIT, waitUntil: "load" });
  }

  /**
   * Press a key on web page
   * @param key
   * @param description
   */
  public async keyPress(key: string, description: string) {
    Log.info(`Pressing ${description}`);
    await this.page.keyboard.press(key);
  }

  /**
   * Waits for the main frame navigation and returns the main resource response.
   */
  public async waitForNavigation() {
    Log.info(`Waiting for navigation`);
    await this.page.waitForNavigation();
  }

  /**
   * Waits for the response 200.
   * @param apiURL
   * @param status
   */
    public async waitForResponse(apiURL: string, status: number = 200) {
      Log.info(`Waiting for API response of end point ${apiURL}`);
      const response = await this.page.waitForResponse(resp => resp.url().includes(apiURL), {timeout: CommonConstants.API_TIMEOUT});
      Log.info(`API response of end point ${apiURL} is ${response.status()}`);
      await response.finished();
      return response.status();
    }

  /**
   * Waits for the main frame navigation and returns the main resource response.
   */
    public async waitForTimeout(number: number) {
      Log.info(`Waiting for navigation`);
      await this.page.waitForTimeout(number);
    }

  /**
   * Waits for the url explicitly.
   */
      public async waitForURL(URL: string, description: string, number: number = CommonConstants.WAIT) {
        Log.info(`Waiting for the URL of the "${description}"`);
        await this.page.waitForURL(URL, {timeout: number});
      }

  /**
   * Returns when the required load state has been reached.
   */
  public async waitForLoadState() {
    Log.info(`Waiting for load event`);
    await this.page.waitForLoadState("load", { timeout: CommonConstants.WAIT });
  }

  /**
   * Returns when the required dom content is in loaded state.
   */
  public async waitForDomContentLoaded() {
    Log.info(`Waiting for load event`);
    await this.page.waitForLoadState("domcontentloaded", { timeout: CommonConstants.WAIT });
  }

  /**
   * Gets the handle of the new window
   * @param selector
   * @param description
   */
  public async switchToNewWindow(selector: string, description: string): Promise<Page> {
    let [newPage] = [this.page];
    Log.info(`Opening  ${description} Window`);
    [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      await this.elementAction.setElement(selector, description).click(),
    ]);
    await this.waitForDomContentLoaded();
    return newPage;
  }

  /**
   * Gets the handle of the new window
   * @param selector
   * @param description
   */
    public async getWindowHandles(selector: string, description: string): Promise<Page[]> {
      let [newPage] = [this.page];
      Log.info(`Opening  ${description} Window`);
      [newPage] = await Promise.all([
        this.page.context().waitForEvent("page"),
        await this.elementAction.setElement(selector, description).click(),
      ]);
      await this.waitForDomContentLoaded();
      const pages = await this.page.context().pages();
      return pages;
    }

  /**
   * Bring the window to front
   * @param description
   */
      public async bringToFront(description: string) {
        await this.page.bringToFront();
        Log.info(`Bringing ${description} Window to front`);
      }

  /**
   * Clicks the an element, accepts the alert and returns the alert message
   * @param selector  selector of the element
   * @param description description of element
   * @returns alert message
   */
  public async acceptAlertOnElementClick(selector: string, description: string): Promise<string> {
    const message = this.alert().accept();
    return this.handleAlert(selector, description, message);
  }

  /**
   * Clicks the an element, dismisses the alert and returns the alert message
   * @param selector  selector of the element
   * @param description description of element
   * @returns alert message
   */
  public async dismissAlertOnElementClick(selector: string, description: string): Promise<string> {
    const message = this.alert().dismiss();
    return this.handleAlert(selector, description, message);
  }

  /**
   * Clicks the an element, accepts the alert prompt and returns the alert message
   * @param selector  selector of the element
   * @param description description of element
   * @param promptText A text to enter in prompt.
   * @returns alert message
   */
  public async acceptPromptOnElementClick(selector: string, description: string, promptText?: string): Promise<string> {
    const message = this.alert().accept(promptText);
    return this.handleAlert(selector, description, message);
  }

  private async handleAlert(selector: string, description: string, message: Promise<string>): Promise<string> {
    await this.elementAction.setElement(selector, description).click();
    return message;
  }

  /**
   * Gets the page Title
   * @returns
   */
  public async getPageTitle(): Promise<string> {
    let title: string;
    title = await this.page.title();
    Log.info(`Getting Page Title: ${title}`)
    return title;
  }

  /**
   * Downloads the file and returns the downloaded file name
   * @param selector element that results in file download
   * @param description description of the element
   * @returns downloaded file name
   */
  public async downloadFile(selector: string, description: string): Promise<string> {
    let fileName: string;
    Log.info(`Downloading ${description} file`);
    const [download] = await Promise.all([
      this.page.waitForEvent('download', { timeout: CommonConstants.WAIT }),
      await this.page.locator(selector).click({ modifiers: ["Alt"] }),
    ]);
    fileName = download.suggestedFilename();
    const filePath = `${CommonConstants.DOWNLOAD_PATH}${fileName}`;
    await download.saveAs(filePath);
    await download.delete();
    return fileName;
  }
  /**
   * Pause the execution in seconds
   * @param sec
   */
  public async pauseInSecs(sec: number) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, sec * CommonConstants.ONE_THOUSAND));
  }

  /**
   *
   * @param selector Locator to find the element
   */
    uploadAFile = async(selector: string, filePath: string) => {
      Log.info(`Uploading file : ${filePath}`);
      const fileChooserPromise = page.waitForEvent('filechooser');
      await this.page.locator(selector).click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(filePath);
     }
     public lighthouse = async(websiteURL: string,fileFormat:string) => {
      exec(`lighthouse ${websiteURL} --output=${fileFormat} --output-path=test-results/reports/lighthouse/lighthouse-report.${fileFormat}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error}`);
          return;
        }
        console.log('Lighthouse audit completed');
      });
     };
}
