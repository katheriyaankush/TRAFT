import { Locator, Page } from "@playwright/test";
import Log from "../../logger/Log";
import HTMLConstants from "../../constants/HTMLConstants";
import UIElementActions from "./UIElementActions";

export default class MoveActions {
    private locator: Locator;
    private description: string;
    constructor(private page: Page) { }

  /**
   * Sets the locator with description
   * @param locator
   * @param description
   * @returns
   */
  public setLocator(locator: Locator, description: string): MoveActions {
    this.locator = locator;
    this.description = description;
    return this;
  }

  /**
   * Drag and drop the element
   * @param element
   * @returns
   */
  public async dragTo(element: UIElementActions) {
    Log.info(`Drag the element ${this.description}`);
    await this.locator.dragTo(await element.getLocator());
    }
}