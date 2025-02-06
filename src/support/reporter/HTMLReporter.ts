import {DateUtil, EnvUtil} from '../utils';

export default class HTMLReporter {
    public static generateReport() {
        const os = require('node:os');
        const report = require('multiple-cucumber-html-reporter');
        EnvUtil.setEnv();
        report.generate({
            jsonDir: './test-results/reports/',
            reportPath: './test-results/reports/html/',
            pageTitle: 'Test Execution Report',
            reportName: 'Execution Results',
            displayDuration: false,
            displayReportTime: false,
            hideMetadata: false,
            customMetadata: false,
            metadata: {
                browser: {
                    name: process.env.BROWSER,
                    version: 'latest'
                },
                device: os.hostname(),
                platform: {
                    name: os.type(),
                    version: os.version(),
                }
            },
            customData: {
                title: 'Run Info',
                data: [
                    { label: 'Execution Date', value: DateUtil.todayDateGenerator() },
                    { label: 'Base URL', value: process.env.BASE_URL },
                    { label: 'Release', value: '0.1' },
                    { label: 'Environment', value: process.env.ENVIRONMENT },
                ]
            }
        });
    }
}
HTMLReporter.generateReport();
