```gherkin
Feature: Fix login issue for mobile users

  Scenario: Successful login for registered mobile user
    Given the user is on the login page
    When the user enters valid credentials
    And the user submits the login form
    Then the user should be redirected to the dashboard
    And a welcome message should be displayed

  Scenario: Failed login for unregistered mobile user
    Given the user is on the login page
    When the user enters invalid credentials
    And the user submits the login form
    Then an error message should be displayed indicating invalid credentials

  Scenario: Login form displays correctly on mobile devices
    Given the user is on the login page using a mobile device
    Then the login form fields should be visible
    And the login button should be operational
    And the layout should be responsive

  Scenario: Password recovery for mobile user
    Given the user is on the login page
    When the user clicks on the "Forgot Password?" link
    Then the user should be redirected to the password recovery page
    And the user should be able to reset their password successfully

  Scenario: Session persistence for mobile users
    Given the mobile user has logged in successfully
    When the user closes the app and reopens it
    Then the user should remain logged in
    And the dashboard should be displayed automatically

  Scenario: Handling multiple failed login attempts
    Given the user is on the login page
    When the user enters invalid credentials three times
    Then the user should receive a message stating that their account has been locked
    And instructions on how to unlock their account should be provided
```