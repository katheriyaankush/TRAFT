import { Locator, Page } from "@playwright/test";
import Log from "../../logger/Log";
import HTMLConstants from "../../constants/HTMLConstants";

export default class WebTableActions {
    private locator: Locator;
    private description: string;
    constructor(private page: Page) { }

  /**
   * Sets the locator with description
   * @param locator
   * @param description
   * @returns
   */
  public setLocator(locator: Locator, description: string): WebTableActions {
    this.locator = locator;
    this.description = description;
    return this;
  }

    public async getColumnHeaders(locator: string = HTMLConstants.TABLE_COLUMN_HEADERS) {
        Log.info(`Getting all the columns of ${this.description}`);
        await this.locator.waitFor({state: "visible"});
        const columnHeaders = await this.locator.locator(locator).allTextContents();
        Log.info(`Column headers of ${this.description} are [${columnHeaders}]`);
        return columnHeaders;
    }

    public async getColumnCount() {
        Log.info(`Getting the column count of ${this.description}`);
        return await this.locator.locator(HTMLConstants.TABLE_COLUMN_HEADERS).count();
    }

    public async getRows(locator: string = HTMLConstants.TABLE_ROWS) {
        Log.info(`Getting all the rows of ${this.description}`);
        await this.locator.waitFor({state: "visible"});
        return this.locator.locator(locator).allTextContents();
    }

    public async getRowCount() {
        Log.info(`Getting the row count of ${this.description}`);
        return await this.locator.locator(HTMLConstants.TABLE_ROWS).count();
    }

    public async getRowsByColumnName(columnName: string) : Promise<string[]>{
        Log.info(`Getting the rows of ${this.description} with column name ${columnName}`);
        const columnHeaders = await this.getColumnHeaders();
        const columnIndex = columnHeaders.indexOf(columnName);
        const rows = await this.getRows();
        const filteredRows = [];
        for (const element of rows) {
            const row = element;
            if (row[columnIndex] === columnName) {
                filteredRows.push(row);
            }
        }
        Log.info(`Rows of ${this.description} with column name ${columnName} are [${filteredRows}]`);
        return filteredRows;
    }
}