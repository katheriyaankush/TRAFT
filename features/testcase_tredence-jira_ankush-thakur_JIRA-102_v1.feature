```gherkin
Feature: Enhance Dashboard UI

  Scenario: User views the enhanced dashboard
    Given the user is logged into the application
    When the user navigates to the dashboard
    Then the user should see a visually appealing layout
    And the dashboard should display relevant information clearly

  Scenario: Dashboard loads within acceptable time limits
    Given the user is logged into the application
    When the user navigates to the dashboard
    Then the dashboard should load within 2 seconds

  Scenario: Dashboard widgets functionality
    Given the user is logged into the application
    And the dashboard displays widgets for report summaries
    When the user interacts with a widget
    Then the corresponding detailed report should open 

  Scenario: Responsive design of the dashboard
    Given the user is on a mobile device
    When the user navigates to the dashboard
    Then the dashboard should adapt to the screen size without losing functionality

  Scenario: User customization options on the dashboard
    Given the user is logged into the application
    When the user accesses dashboard settings
    And the user customizes the displayed widgets
    Then the dashboard should reflect the user’s preferences

  Scenario: User sees notifications on the dashboard
    Given the user is logged into the application
    When there are new notifications
    Then the notifications should be displayed prominently on the dashboard

  Scenario: Help and support access from the dashboard
    Given the user is on the dashboard
    When the user clicks on the help icon
    Then the user should be directed to the help and support page

  Scenario: Consistency in navigational elements
    Given the user is logged into the application
    When the user views the dashboard
    Then all navigational elements should maintain consistent styles throughout the application
```