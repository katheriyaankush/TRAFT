# T-RAFT Framework
T-RAFT is an automation framework **Behavior-driven development** (BDD) based and built on top of the playwright and cucumber.js to enable **Acceptance and Integration tests for UI**. It merges several libraries for framework users to build efficient scripts from scratch in short span with the CI/CD integration.

## Setup the Environment
```
1. Download and Install Visual Studio Code from [Visual Studio Code](https://code.visualstudio.com/download)
2. Download and Install Git from [Git](https://git-scm.com/downloads)
3. Download and Install Node.js from [Node.js](https://nodejs.org/en/download/)
4. Execute `npm install` command to install all the npm packages present in package.json file.
5. Install all the recommended vscode extensions present in `.vscode\extensions.json`
```
# Usage

To add a module to your project, you can edit the **package.json** file

Start writing your tests into these directories :

* **features**: for QA to write the feature files
* **pages**: for dev to implement page objects
* **steps**: for dev to implement code relevant to feature files

## Designing Scenarios
1. Add the tags `@ignore` for removed application functionalities
2. Add the tags `@todo` for identified scenarios to automate in future
3. Add the tags `@manual` for scenarios which are not automatable

##  Rules to export the feature files

1. In the terminal execute the following mentioned command `set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.
2. Execute the command `Get-ExecutionPolicy`.`RemoteSigned` output message needs to be displayed
3. Execute the command Get-ExecutionPolicy -list. scope and execution policy details needs to be displayed
4. Install the picklesDoc using the command "npm i picklesdoc"
5. To download all the test cases use the command  "picklesdoc xlsx ./features/summary/featureFilesTestCases.xlsx"

### ESLINT
1. While adding the .ts files to the framework, make sure respective index file in that folder is updated
2. Run `npm run test` It automatically executes linters and the reporter

## Execution
1. Execute `npm run test` script, It executes pretest [Linters].

## setup the debug
1.open the package.json file.Scripts part is used for debug.User do not have to click add configurations. package.json file has all the required scripts to start the debug. For example, if the user would like to execute thr scripts in the edge browser. Use the cmd "test-msedge". Other commands are mentioned in the scripts part.

## Generate report
1.In the CLI,enter command 'npm run reporter'.

## Directory Structure

Folder structure of T-RAFT is as follows.

```
Studio-platform
    |- .azuredevops               --> It contains the vscode settings
        |-pull_request_template.md  --> It contains the Markdown content used for PR description self checks
    |-.vscode
        |-extensions.json   --> vscode plugins required for the framework
        |-settings.json     --> To navigate to the specific step definition file on clicking scenario steps
    |-.husky                --> It stops the committing the code if the pre-commit hooks are failed
        |-pre-commit        --> It contains the pre-commit hooks
    |-features              --> It contains all the feature files in gherkin format
    |-src
        |-support
            |-config            --> It contains the config files for the framework
                |-hooks.ts     --> It contains browser launch and close functions
            |-constants         --> It contains the constants used in the framework
                |-BrowserConstants.ts --> It contains the constants used in the framework
            |-logger            --> It contains the constants used in the framework
                |-Log.ts --> Logging
            |-manager            --> selecting the browser launch options based on the browser name in .env file
                |-BrowserManager.ts --> Browser config settings
            |-playwright         --> It contains the customized playwright actions and assertions
                |-actions        --> It contains the customized playwright actions
                |-assertions     --> It contains the customized playwright assertions
            |-reporter           --> It contains the customized reporter related details
                |-Reporter.ts    --> It contains the customized reporter
            |-utils              --> It contains the utility functions
        |-app
            |-pages              --> It contains the page functions and related page locators
            |-steps              --> It contains the step definitions for the feature files
            |-data               --> It contains the test data for the feature files
            |-constants          --> It contains the constants used in the application eg: static data
    |-node_modules          --> It contains the node-modules for the npm packages present in package.json file
    |-.gitignore
    |-.gherkin-lintrc       --> File consists of all the gherkin rules to maintain the standards
    |-azure-pipelines.yml   --> File used to setup the pipeline
    |-prettierrc            --> File used to format the code as per the standards
    |-cucumber.js           --> Cucumber settings
    |-package-lock.json     --> Automatically generated file for any operations where npm modifies either the node_modules tree or package.json
    |-package.json          --> It contains all the npm dependencies required for developers as well as end users
    |-tsconfig.json         --> Typescript configuration file
```

## Azure pipelines creation using existing YAML file
    1. Click on New Pipeline button
    2. Choose the code repo from the options
    3. Select the repo name
    4. Configure your pipeline using existing YAML file (which is available inside your framework)
    5. Choose the path of the YAML file and continue

## Generate the  Lighthouse reports:
    1. install Lighthouse using the command 'npm install lighthouse'
    2. Use await web.lighthouse('mention the website you want to get the Lighthouse report');
    3. Once the code is executed, lighthouse would be generated in the test results folder as mentioned below.Review the audit results and take action to address any issues or areas for improvement. Lighthouse's recommendations will guide your development team in making web projects even better.

## References
1. [Gherkin-lint]|https://www.npmjs.com/package/gherkin-lint
2. [EsLint]|https://eslint.org/docs/user-guide
3. [Typescript-eslint]|https://typescript-eslint.io/docs/linting
4. [Continuous Integration with Azure Pipeline]|https://playwright.dev/docs/ci#azure-pipelines
