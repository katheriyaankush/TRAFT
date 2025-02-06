import {DateUtil, EnvUtil} from "../utils";

let reporter = require('cucumber-html-reporter');

export default class CucumberReporter {
    public static generate() {
        EnvUtil.setEnv();
        const options = {
            brandTitle: "Test Report",
            theme: 'bootstrap',
            jsonFile: 'test-results/reports/cucumber.json',
            output: 'test-results/reports/cucumber.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: false,
            columnLayout: 1,
            metadata: {
                "Execution Date": DateUtil.todayDateGenerator(),
                "Base URL": process.env.BASE_URL,
                "Environment": process.env.ENVIRONMENT,
                "Browser": process.env.BROWSER,
            }
        };
        reporter.generate(options);
    }
}
CucumberReporter.generate();