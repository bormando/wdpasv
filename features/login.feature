Feature: Auth

  Background:
    Given login page is open

  Scenario Outline: As a user, I can log into the secure area

    When I log in with <username> and <password>
    Then I should be redirected to my profile page

    Examples:
      | username              | password  |
      | xonol63306@gameqo.com | Qwerty!23 |

  Scenario Outline: As a user, I'm unable to login with invalid credentials

    When I log in with <username> and <password>
    Then I should see notification about failed auth

    Examples:
      | username            | password |
      | invalid@example.com | invalid  |

  Scenario Outline: As a user, I must see validation error if email has invalid format

    When I set email <username>
    Then email validation error appears

    Examples:
      | username |
      | invalid  |

  Scenario Outline: As a user, I must see an error if email field was cleared

    When I set email <username>
    When I clear email input field
    Then email required error appears

    Examples:
      | username          |
      | email@example.com |

  Scenario Outline: As a user, I must see an error if password field was cleared

    When I set password <password>
    When I clear password input field
    Then password required error appears

    Examples:
      | password  |
      | Qwerty!23 |
