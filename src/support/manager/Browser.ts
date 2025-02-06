import { chromium, ChromiumBrowser, firefox, FirefoxBrowser, LaunchOptions, webkit, WebKitBrowser } from "@playwright/test";
import BrowserConstants from "../constants/BrowserConstants";

const browserOptions: LaunchOptions = {
    slowMo: 50,
    args: ["--start-maximized", "--disable-extensions", "--disable-plugins"],
    firefoxUserPrefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
    },
    headless: JSON.parse(process.env.HEADLESS),
    timeout: Number.parseInt(process.env.BROWSER_LAUNCH_TIMEOUT , 10),
    downloadsPath: "./test-results/downloads",
};

// This is added to include the property "channel" in the browserOptions object
const edgeBrowserOptions: LaunchOptions = {
    slowMo: 50,
    args: ["--start-maximized", "--disable-extensions", "--disable-plugins"],
    firefoxUserPrefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
    },
    headless: JSON.parse(process.env.HEADLESS),
    channel: "msedge",
    timeout: Number.parseInt(process.env.BROWSER_LAUNCH_TIMEOUT , 10),
    downloadsPath: "./test-results/downloads",
};

export default class Browser {
    public static async launch() {
        const browserType = process.env.BROWSER;
        let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
        if (BrowserConstants.FIREFOX === browserType) {
            browser = await firefox.launch(browserOptions);
        } else if (BrowserConstants.WEBKIT === browserType || BrowserConstants.SAFARI === browserType) {
            browser = await webkit.launch(browserOptions);
        } else if (BrowserConstants.EDGE === browserType || BrowserConstants.MSEDGE === browserType) {
            browser = await chromium.launch(edgeBrowserOptions);
        } else {
            browser = await chromium.launch(browserOptions);
        }
        return browser;
    }
}
