```gherkin
Feature: Mobile User Login

  Scenario: Successful login for mobile users
    Given I am on the mobile login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the mobile user dashboard
    And I should see a welcome message

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the mobile login page
    When I enter invalid credentials
    And I click the login button
    Then I should remain on the mobile login page
    And I should see an error message indicating incorrect username or password

  Scenario: Login page displays correctly on mobile devices
    Given I am on the mobile login page
    Then the login page should be displayed with the correct layout for mobile devices
    And the "login" button should be clearly visible

  Scenario: Forget password functionality for mobile users
    Given I am on the mobile login page
    When I click on the "Forgot Password?" link
    Then I should be navigated to the password recovery page
    And I should see a field to enter my email address

  Scenario: Account lockout after multiple failed login attempts
    Given I am on the mobile login page
    When I enter invalid credentials three times
    And I click the login button after each attempt
    Then my account should be temporarily locked
    And I should see a message informing me of the lockout and instructions to unlock it

  Scenario: Remember me option for mobile users
    Given I am on the mobile login page
    When I enter valid credentials
    And I select the "Remember me" checkbox
    And I click the login button
    Then I should be logged in without having to enter my credentials on my next visit

  Scenario: Session timeout for mobile users
    Given I am logged into the mobile user dashboard
    When I remain inactive for a period set for session timeout
    Then I should be logged out automatically
    And I should be redirected to the mobile login page with a session timeout message
```