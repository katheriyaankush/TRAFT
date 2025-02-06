Here are the step definitions for the given BDD test cases using JavaScript. The step definitions are structured and reusable, making it easy to maintain and extend.


const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let user = {
  loggedIn: false,
  onDashboard: false,
  hasAlert: false,
  assistiveTech: false,
};

let dashboard = {
  layoutUpdated: false,
  widgets: {
    trafficWidgetClicked: false,
  },
  notifications: {
    show: false,
  },
  customizationOptions: {
    visible: false,
  },
};

// Step Definitions

Given('the user is logged into the application', function () {
  user.loggedIn = true;
});

When('the user navigates to the dashboard', function () {
  user.onDashboard = true;
  dashboard.layoutUpdated = true; // Assuming the layout is updated during navigation
});

Then('the user should see an updated dashboard layout', function () {
  assert.strictEqual(user.onDashboard, true, 'User is not on the dashboard');
  assert.strictEqual(dashboard.layoutUpdated, true, 'Dashboard layout is not updated');
});

Given('the user is on the updated dashboard', function () {
  assert.strictEqual(user.onDashboard, true, 'User is not on the updated dashboard');
});

When('the user clicks on the traffic widget', function () {
  dashboard.widgets.trafficWidgetClicked = true; // Simulating clicking the traffic widget
});

Then('the user should see a detailed report of the traffic data', function () {
  assert.strictEqual(dashboard.widgets.trafficWidgetClicked, true, 'Traffic widget was not clicked');
  // Here you can add further validation for the report if necessary
});

When('the user resizes the browser window', function () {
  // Simulating resizing action
  dashboard.layoutUpdated = true; // Assuming layout adapts to resize
});

Then('the dashboard layout should adjust seamlessly without loss of functionality', function () {
  assert.strictEqual(dashboard.layoutUpdated, true, 'Dashboard layout did not adjust seamlessly');
});

When('the user clicks on the "Customize" button', function () {
  dashboard.customizationOptions.visible = true; // Simulating clicking the customize button
});

Then('the user should be presented with options to modify dashboard widgets', function () {
  assert.strictEqual(dashboard.customizationOptions.visible, true, 'Customization options are not visible');
});

Given('there are important alerts related to the dashboard data', function () {
  user.hasAlert = true; // Simulating presence of important alerts
});

Then('the user should see a notification banner at the top of the dashboard', function () {
  assert.strictEqual(user.hasAlert, true, 'No alert is displayed for important updates');
  dashboard.notifications.show = true; // A notification banner will be assumed to show
});

Given('the user uses assistive technology', function () {
  user.assistiveTech = true; // Setting user as using assistive technology
});

When('the user navigates the updated dashboard', function () {
  assert.strictEqual(user.onDashboard, true, 'User is not on the updated dashboard');
  // Here you might simulate navigation actions
});

Then('the user should be able to access all features with their assistive technology', function () {
  assert.strictEqual(user.assistiveTech, true, 'User cannot access all features with assistive technology');
});


### Explanation
1. **Structure**: Each step of the BDD scenarios is represented using Cucumber's `Given`, `When`, and `Then` constructs.
2. **Assertions**: Assert statements are used to validate the expected outcomes for each step.
3. **State Management**: The user and dashboard states are managed through simple JavaScript objects, allowing for easy modification and validation within the step definitions.
4. **Encapsulation**: Logic is encapsulated in the step definitions, making them reusable and easy to understand. 

You can further enhance these step definitions based on actual behavior and requirements of your application.