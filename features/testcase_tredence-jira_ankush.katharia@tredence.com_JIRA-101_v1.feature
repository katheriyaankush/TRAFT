```gherkin
Feature: Mobile User Login

  Scenario: Successful login for mobile users
    Given a mobile user is on the login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should be redirected to the homepage
    And a welcome message should be displayed

  Scenario: Unsuccessful login with invalid credentials for mobile users
    Given a mobile user is on the login page
    When the user enters invalid credentials
    And clicks the login button
    Then an error message should be displayed indicating invalid credentials
    And the user should remain on the login page

  Scenario: Login page is responsive on mobile devices
    Given a mobile user accesses the login page
    When the login page loads
    Then the layout should be adjusted for mobile display
    And all elements should be accessible without horizontal scrolling

  Scenario: Password visibility toggle for mobile users
    Given a mobile user is on the login page
    When the user clicks the "show password" icon
    Then the password input field should reveal the entered password
    And clicking again should obscure the password

  Scenario: Forgot password link functionality for mobile users
    Given a mobile user is on the login page
    When the user clicks on the "Forgot Password?" link
    Then the user should be redirected to the password recovery page
    And a confirmation message should be displayed

  Scenario: Session timeout handling for mobile users
    Given a mobile user is logged in
    When the user remains inactive for an extended period
    Then the user should be logged out
    And a session timeout message should be displayed on the next attempt to access a protected page
```