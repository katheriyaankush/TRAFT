Here are reusable and well-structured JavaScript step definition functions for the given BDD test cases using a framework like Cucumber.js. These functions will define the behavior expected from each step in the scenarios listed above.


const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am logged into the application', async function () {
    // Code to ensure user is logged into the application
    await this.loginUser();
});

When('I navigate to the dashboard', async function () {
    // Code to navigate to the dashboard
    await this.navigateToDashboard();
});

Then('I should see an updated layout with a modern design', async function () {
    // Code to verify the dashboard layout and design
    const layout = await this.getDashboardLayout();
    expect(layout).to.be.equal('modern');
});

Then('I should see a clear distinction between different sections of the dashboard', async function () {
    // Code to check that sections have clear distinctions
    const sections = await this.getDashboardSections();
    expect(sections).to.have.distinctions();
});

Given('I am using a mobile device', function () {
    // Code indicating testing is in mobile view
    this.setDevice('mobile');
});

Then('the dashboard UI should be responsive', async function () {
    // Code to verify UI responsiveness
    const isResponsive = await this.isDashboardResponsive();
    expect(isResponsive).to.be.true;
});

Then('all elements should adapt to fit the screen size without horizontal scrolling', async function () {
    // Code to check elements fit within screen size
    const adaptiveElements = await this.checkScreenAdjustment();
    expect(adaptiveElements).to.be.true;
});

Given('I am on the dashboard', async function () {
    // Code to confirm user is indeed on the dashboard
    await this.verifyDashboard();
});

When('I view the available widgets', async function () {
    // Code to fetch the list of available widgets
    this.widgets = await this.getWidgets();
});

Then('I should see intuitive and easy-to-understand widgets', function () {
    // Code to check if widgets are intuitive
    expect(this.widgets).to.satisfy(widgets => widgets.every(widget => widget.isIntuitive()));
});

Then('I should be able to customize widget settings seamlessly', async function () {
    // Code to customize widget settings and verify
    const result = await this.customizeWidgetSettings();
    expect(result).to.be.true;
});

When('I look for navigation options', async function () {
    // Code to check navigation options
    this.navigationOptions = await this.getNavigationOptions();
});

Then('I should find an improved menu structure', function () {
    // Verify that the menu structure is improved
    expect(this.navigationOptions).to.have.an.improvedStructure();
});

Then('I should be able to access my desired sections within two clicks', async function () {
    // Code to confirm access within two clicks
    const canAccess = await this.checkAccessWithTwoClicks();
    expect(canAccess).to.be.true;
});

Given('I am a screen reader user', function () {
    // Code to simulate screen reader user settings
    this.setAccessibilitySettings('screenReader');
});

When('I navigate the dashboard', async function () {
    // Code to navigate through the dashboard
    await this.navigateUsingScreenReader();
});

Then('all UI elements should be properly labeled', async function () {
    // Code to verify proper labeling of UI elements
    const elements = await this.getAllUIElements();
    expect(elements).to.satisfy(elements => elements.every(e => e.isLabeled()));
});

Then('I should be able to understand the content and interact with the dashboard easily', async function () {
    // Code to verify interaction is easy
    const interactionEasy = await this.canInteractEasily();
    expect(interactionEasy).to.be.true;
});

When('new information is available', async function () {
    // Code to simulate new information being available
    await this.setNewInformationAvailable();
});

Then('I should see visual indicators (like notifications or badges) highlighting the updates', async function () {
    // Code to check for visual indicators
    const hasVisualIndicators = await this.checkVisualIndicators();
    expect(hasVisualIndicators).to.be.true;
});

Then('I should be able to click on these indicators to view the related information', async function () {
    // Code to click indicator and verify the related information
    const canClickIndicators = await this.clickOnIndicatorsAndCheck();
    expect(canClickIndicators).to.be.true;
});

When('I look for display settings', async function () {
    // Code to fetch display settings options
    this.displaySettings = await this.getDisplaySettings();
});

Then('I should find an option to switch to dark mode', function () {
    // Check presence of dark mode option
    expect(this.displaySettings).to.include('darkMode');
});

Then('the dashboard UI should change to dark mode successfully', async function () {
    // Code to switch to dark mode and verify change
    const isDarkModeActive = await this.toggleDarkMode();
    expect(isDarkModeActive).to.be.true;
});

When('I interact with various elements', async function () {
    // Code to interact with elements on the dashboard
    await this.interactWithDashboardElements();
});

Then('the dashboard should respond quickly', async function () {
    // Code to verify the response time of interactions
    const responseTime = await this.getResponseTime();
    expect(responseTime).to.be.lessThan(200); // milliseconds
});

Then('there should be no noticeable lags or delays during interactions', async function () {
    // Code to confirm there are no lags
    const isLagging = await this.checkForLags();
    expect(isLagging).to.be.false;
});


In this structure:
- Each step definition corresponds directly to a step in the Gherkin scenario.
- The functions use reusable patterns to check states, perform actions, or assert conditions.
- Placeholder methods (like `this.loginUser()`, `this.getDashboardLayout()`, etc.) are assumed to be implemented in the context (`this`) and can be customized based on the actual application and testing framework in use.