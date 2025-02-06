Here is a set of reusable and well-structured step definition functions in JavaScript for the specified BDD scenarios. I am using the `Cucumber.js` framework as an example, which is a popular choice for Behavior Driven Development in JavaScript applications.


const { Given, When, Then } = require('@cucumber/cucumber');

// Step Definitions
Given('the user is logged into the application', async function () {
    // logic to log the user into the application
    await this.loginUser();
});

When('the user navigates to the dashboard', async function () {
    // logic to navigate to the dashboard
    await this.navigateToDashboard();
});

Then('the dashboard should display the new UI layout', async function () {
    // assertion to check for the new UI layout
    const layout = await this.getDashboardLayout();
    expect(layout).to.equal('new-layout');  // Adjust condition based on actual value
});

Then('all components should be properly aligned', async function () {
    // logic to verify component alignment
    const isAligned = await this.checkComponentAlignment();
    expect(isAligned).to.be.true;
});

Given('the dashboard is loaded', async function () {
    // ensure the dashboard is loaded
    await this.loadDashboard();
});

When('the user refreshes the dashboard', async function () {
    // logic to refresh the dashboard
    await this.refreshDashboard();
});

Then('the graphs should be populated with the latest data', async function () {
    // assertion to check latest graph data
    const graphData = await this.getGraphData();
    expect(graphData).to.not.be.empty;
});

Then('the graphs should be rendered correctly without errors', async function () {
    // logic to check for rendering errors
    const hasError = await this.checkGraphErrors();
    expect(hasError).to.be.false;
});

Given('the user is on the dashboard', async function () {
    await this.loadDashboard();
});

When('the user drags and drops a widget to a new position', async function () {
    // logic for dragging and dropping a widget
    await this.dragAndDropWidget();
});

Then('the widget should be successfully moved to the new position', async function () {
    // assertion to verify widget's new position
    const position = await this.getWidgetPosition();
    expect(position).to.equal('new-position'); // Adjust to reflect actual verification
});

Then('the position should be saved for future sessions', async function () {
    // logic to check position persistence
    const savedPosition = await this.getSavedWidgetPosition();
    expect(savedPosition).to.equal('new-position');
});

Given('the user accesses the dashboard on a mobile device', async function () {
    // logic to simulate mobile device access
    await this.accessDashboardOnMobile();
});

Then('the dashboard should adjust to fit the mobile screen size', async function () {
    // assertion to verify mobile responsiveness
    const isResponsive = await this.checkMobileResponsiveness();
    expect(isResponsive).to.be.true;
});

Then('all features should be accessible without scrolling horizontally', async function () {
    // assert all features fit the mobile viewport
    const isHorizontallyScrollable = await this.checkHorizontalScroll();
    expect(isHorizontallyScrollable).to.be.false;
});

When('the user selects "Customize Widgets"', async function () {
    // logic to click the custom widget option
    await this.customizeWidgets();
});

Then('the user should see a list of available widgets', async function () {
    // assertion to verify the available widgets list is displayed
    const widgetsList = await this.getAvailableWidgets();
    expect(widgetsList).to.not.be.empty;
});

Then('the user should be able to add or remove widgets from their dashboard', async function () {
    // logic to test adding/removing a widget
    await this.addRemoveWidgets();
    const updatedWidgets = await this.getCurrentWidgets();
    expect(updatedWidgets).to.include('desired-widget'); // Adjust accordingly
});

Given('there are new notifications for the user', async function () {
    // logic to populate new notifications
    await this.addUserNotifications();
});

When('the user accesses the dashboard', async function () {
    await this.loadDashboard();
});

Then('the dashboard should display an alert for user notifications', async function () {
    // assertion to check for notification alerts
    const hasNotificationAlert = await this.checkNotificationAlert();
    expect(hasNotificationAlert).to.be.true;
});

Then('the user should be able to click to view the notifications in detail', async function () {
    // logic to click and view notifications
    await this.viewNotifications();
    const notifications = await this.getDisplayedNotifications();
    expect(notifications).to.not.be.empty; 
});


### Explanation of the Code
1. Each **Given**, **When**, and **Then** statement corresponds to a step in the provided scenarios.
2. Functions are structured to be reusable and utilize helper methods that can encapsulate specific logic.
3. Assertions are incorporated using Chai's syntax, assuming it would be installed and utilized in the project (you can adjust according to your assertion library).
4. Placeholder method calls like `this.loadDashboard()`, `this.checkGraphErrors()`, etc. are defined to maintain clarity and encapsulate specific functionalities. These would need to be implemented in your step definitions file or associated page objects.

### Dependency
You will need to install a BDD framework like `Cucumber.js` and an assertion library like `Chai` to run these examples.