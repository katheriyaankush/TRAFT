import { Locator } from "@playwright/test";
import Log from "../../logger/Log";
import UIElementActions from "./UIElementActions";

export default class EditBoxActions extends UIElementActions {
  /**
   * Sets the selector with description
   * @param selector
   * @param description
   * @returns
   */
  public setEditBox(selector: string, description: string): EditBoxActions {
    this.setElement(selector, description);
    return this;
  }

  /**
   * Sets the locator with description
   * @param locator
   * @returns
   */
  public setLocator(locator: Locator, description: string): EditBoxActions {
    super.setLocator(locator, description);
    return this;
  }

  /**
   * Clear and enter text
   * @param value
   * @returns
   */
  public async fill(value: string) {
    Log.info(`Entering ${this.description} as ${value}`);
    await this.getLocator().fill(value);
    return this;
  }

    /**
   * Clear text field
   */
    public async clear() {
      Log.info(`Clearing ${this.description}`);
      await this.getLocator().focus();
      await this.getLocator().press("Control+A");
      await this.getLocator().press("Backspace");
      return this;
    }

  /**
   * Types the value in text field
   * @param value
   * @returns
   */
  public async type(value: string) {
    Log.info(`Typing ${this.description} as ${value}`);
    await this.getLocator().type(value);
    return this;
  }

  /**
   * Enter text and hit tab key
   * @param value
   * @returns
   */
  public async fillAndTab(value: string) {
    Log.info(`Entering ${this.description} as ${value} and Tab`);
    await this.getLocator().fill(value);
    await this.getLocator().press("Tab");
    return this;
  }

  /**
   * Typing text and hit tab key
   * @param value
   * @returns
   */
  public async typeAndTab(value: string) {
    Log.info(`Entering ${this.description} as ${value} and Tab`);
    await this.getLocator().type(value);
    await this.getLocator().press("Tab");
    return this;
  }

  public async typePressKeyDownAndEnter(value: string) {
    Log.info(`Entering ${this.description} as ${value} and Key Press Down and Enter`);
    await this.getLocator().type(value);
    await this.getLocator().press("ArrowDown");
    await this.getLocator().press("Enter");
  }
}
