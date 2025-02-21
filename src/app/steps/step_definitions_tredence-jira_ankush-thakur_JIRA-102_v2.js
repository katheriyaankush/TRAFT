Here are the step definition functions in JavaScript for the provided BDD test cases. These functions are structured to be reusable and maintainable for your testing framework.


const { Given, When, Then } = require('@cucumber/cucumber');
const dashboardPage = require('./pageObjects/dashboardPage'); // Assuming dashboardPage contains methods for dashboard interactions
const wait = require('./util/wait'); // Utility for wait functions

// Step Definitions

// Scenario: User can view updated dashboard layout
Given('the user is logged into the application', async function () {
    await dashboardPage.login(); // A function that handles user login
});

When('the user navigates to the dashboard', async function () {
    await dashboardPage.goToDashboard(); // A function that navigates to the dashboard
});

Then('the user should see the new layout of the dashboard', async function () {
    const isLayoutUpdated = await dashboardPage.isLayoutUpdated(); // Check if the layout is updated.
    if (!isLayoutUpdated) throw new Error('Dashboard layout is not updated');
});

// Scenario: User can access all functionalities from the dashboard
Given('the user is on the enhanced dashboard', async function () {
    await dashboardPage.goToEnhancedDashboard(); // Ensure user is on enhanced dashboard
});

When('the user searches for a specific functionality', async function () {
    await dashboardPage.searchFunctionality(); // Assume it searches for a specific functionality
});

Then('the user should be able to find and access that functionality', async function () {
    const functionalityFound = await dashboardPage.isFunctionalityAccessible();
    if (!functionalityFound) throw new Error('Functionality is not accessible');
});

// Scenario: User can customize dashboard widgets
Given('the user has accessed the dashboard', async function () {
    await dashboardPage.accessDashboard(); // Access the dashboard
});

When('the user clicks on the customize button', async function () {
    await dashboardPage.clickCustomizeButton(); // Click the customize button
});

When('the user selects widgets to add or remove', async function () {
    await dashboardPage.customizeWidgets(); // Select widgets for addition/removal
});

Then('the user should see the dashboard reflect the customizations', async function () {
    const isCustomized = await dashboardPage.areCustomizationsReflected();
    if (!isCustomized) throw new Error('Dashboard does not reflect customizations');
});

// Scenario: User can view data in charts in the dashboard
Given('the user is viewing the enhanced dashboard', async function () {
    await dashboardPage.goToEnhancedDashboard(); // Ensure user is on enhanced dashboard
});

When('the user looks at the data representation', async function () {
    // Assuming there's an action needed here, you could add any waiting periods here if necessary
});

Then('the user should see updated charts and graphs', async function () {
    const areChartsUpdated = await dashboardPage.areChartsUpdated();
    if (!areChartsUpdated) throw new Error('Charts and graphs are not updated');
});

// Scenario: Dashboard loads in a reasonable time
Given('the user is viewing the dashboard', async function () {
    await dashboardPage.accessDashboard();
});

When('the user refreshes the page', async function () {
    await dashboardPage.refreshPage();
});

Then('the dashboard should load within 3 seconds', async function () {
    const loadTime = await dashboardPage.getLoadTime();
    if (loadTime > 3) throw new Error('Dashboard loaded in more than 3 seconds');
});

// Scenario: User can access help or documentation from the dashboard
Given('the user is on the enhanced dashboard', async function () {
    await dashboardPage.goToEnhancedDashboard();
});

When('the user clicks on the help icon', async function () {
    await dashboardPage.clickHelpIcon(); // Click the help icon
});

Then('the user should be directed to the help documentation page', async function () {
    const isOnHelpPage = await dashboardPage.isOnHelpDocumentationPage();
    if (!isOnHelpPage) throw new Error('User is not on the help documentation page');
});

// Scenario: User receives notifications on the dashboard
Given('the user is logged into the dashboard', async function () {
    await dashboardPage.login(); // Logs the user into the dashboard
});

When('there are new notifications for the user', async function () {
    await dashboardPage.triggerNewNotifications(); // This function simulates new notifications being present
});

Then('the user should see a notification indicator on the dashboard', async function () {
    const hasNotificationIndicator = await dashboardPage.hasNotificationIndicator();
    if (!hasNotificationIndicator) throw new Error('Notification indicator is not present');
});

// Scenario: User can switch between different themes on the dashboard
Given('the user is on the enhanced dashboard', async function () {
    await dashboardPage.goToEnhancedDashboard();
});

When('the user selects a different theme from the theme options', async function () {
    await dashboardPage.selectTheme(); // Assuming it selects a different theme
});

Then('the dashboard should change to the selected theme', async function () {
    const isThemeChanged = await dashboardPage.isThemeChanged();
    if (!isThemeChanged) throw new Error('Dashboard theme did not change');
});


### Explanation
1. **Common Actions**: The action functions in `dashboardPage` (like `login`, `goToDashboard`, etc.) abstract the complexity of interactions with the dashboard UI, making the step definitions cleaner and easier to understand.

2. **Error Handling**: Each step includes error handling to throw specific errors if the condition is not met, allowing for easier debugging of failed scenarios.

3. **Utilization of Asynchronous Functions**: Since many UI interactions are asynchronous, using `async/await` ensures that actions complete before assertions are made.

4. **Modular and Reusable**: The structure promotes reusability and modularity, allowing easier maintenance and updates when the UI or functionality changes. 

You can adapt the function names and logic in `dashboardPage` based on your actual implementation or the testing framework used.