/* eslint-disable no-var */
import { ChromiumBrowser, WebKitBrowser, FirefoxBrowser, BrowserContext, Page } from "playwright";
import UIActions from "../playwright/actions/UIActions";
import { setDefaultTimeout } from "@cucumber/cucumber";

declare global {
    var browser: ChromiumBrowser | WebKitBrowser | FirefoxBrowser;
    var context: BrowserContext;
    var page: Page;
    var web: UIActions;
}

setDefaultTimeout(40000);
