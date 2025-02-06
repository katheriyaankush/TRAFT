import { Before, BeforeAll, AfterAll, After, setDefaultTimeout, ITestCaseHookParameter, Status, formatterHelpers } from "@cucumber/cucumber";
import { Browser } from "@playwright/test";
import WebBrowser from "../manager/Browser";
import fse from "fs-extra";
import UIActions from "../playwright/actions/UIActions";
import Log from "../logger/Log";

const timeInMin: number = 60 * 1000;
setDefaultTimeout(Number.parseInt(process.env.TEST_TIMEOUT, 10) * timeInMin);
let browser: Browser;

// launch the browser
BeforeAll(async function () {
    browser = await WebBrowser.launch();
    global.context = await browser.newContext({
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        recordVideo: process.env.RECORD_VIDEO === "true" ? { dir: './test-results/videos' } : undefined,
        viewport: { width: 1280, height: 603 },
    });
    global.page = await global.context?.newPage();
    global.web = new UIActions(global.page);
});

// close the browser
AfterAll(async function () {
    await context.close();
	await browser.close();
});

// Execute below function before each scenario
Before(async function ({ pickle, gherkinDocument }: ITestCaseHookParameter) {
    const { line } = formatterHelpers.PickleParser.getPickleLocation({ gherkinDocument, pickle })
    this.world = {}; // Create an empty object to store data in the scenario world
    Log.testBegin(`${pickle.name}: ${line}`);
});

// Execute below function after each scenario
After(async function ({ result, pickle, gherkinDocument }: ITestCaseHookParameter) {
    const { line } = formatterHelpers.PickleParser.getPickleLocation({ gherkinDocument, pickle })
    const status = result.status;
    const scenario = pickle.name;
    // const videoPath = await page?.video()?.path();
    try{
        if (status === Status.FAILED) {
            const image = await page?.screenshot({ fullPage: true });
            await this.attach(image, 'image/png');
            Log.error(`${scenario}: ${line} - ${status}\n${result.message}`);
        }
        // if (process.env.RECORD_VIDEO === "true") {
        //     if (status === Status.FAILED) {
        //         fse.renameSync(videoPath, `./test-results/videos/${scenario}(${line}).webm`);
        //         await this.attach(fse.readFileSync(`./test-results/videos/${scenario}(${line}).webm`), 'video/webm');
        //     } else {
        //         fse.unlinkSync(videoPath);
        //     }
        // }
    }catch(e){
        console.log(e);
    } finally {
        this.world.length !== 0 ? Log.data(JSON.stringify(this.world)) : null;
        Log.testEnd(`${scenario}: ${line}`, status);
    }
});
