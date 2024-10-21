Feature: Payment Product 
    Background: User is already login 
        Given Assert User is In Home Page
        When User click button login in Header Component
        Then Assert User is in Login Page
        When User set value input email with test_234@example.com in Login Page
        When User set value input password with temp1234 in Login Page
        When User click login button in Login Page
        Then Assert User is In Home Page
    Scenario: User can checkout with valid value 
        When User set value search input with NACHI Mata Bor Shank Lurus in Header Component
        Then Assert query search is same with NACHI Mata Bor Shank Lurus in List Search Product Page
        When User click first product in List Search Product Page
        Then Assert title product name in Product Detail Page
        When User click first buy button in Product Detail
        Then Assert modal product cart is shown
        When User in modal product cart is click continue to checkout button
        Then Assert modal product cart is hidden
        Then User is in Checkout Page
        Then Assert User in Checkout Page first product name
        When User in Checkout Page click pay now button
        Then Assert User is in Success Checkout Page
