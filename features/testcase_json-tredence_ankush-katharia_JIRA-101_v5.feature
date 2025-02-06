```gherkin
Feature: Mobile User Login

  Scenario: Successful login for mobile users
    Given a mobile user with valid login credentials
    When the user attempts to log in
    Then the user should be redirected to the homepage
    And the user should see a welcome message

  Scenario: Unsuccessful login with invalid credentials
    Given a mobile user with invalid login credentials
    When the user attempts to log in
    Then the user should remain on the login page
    And the user should see an error message indicating the credentials are incorrect

  Scenario: Login attempt with empty fields
    Given a mobile user on the login page
    When the user submits the login form without entering credentials
    Then the user should remain on the login page
    And the user should see an error message indicating that fields cannot be empty

  Scenario: Login attempt with forgotten password
    Given a mobile user on the login page
    When the user clicks on the "Forgot Password" link
    Then the user should be redirected to the password recovery page

  Scenario: Login page loaded correctly on mobile
    Given a mobile user navigates to the login page
    When the login page is loaded
    Then all input fields and buttons should be displayed correctly
    And the user should be able to tap on buttons without any issues

  Scenario: Session persistence after login
    Given a mobile user has successfully logged in
    When the user closes and reopens the app
    Then the user should remain logged in 
    And the user should be taken directly to the homepage without needing to log in again
```