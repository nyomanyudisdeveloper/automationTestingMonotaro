Feature: Register Account 
    Scenario: As a User, I can register in Register Page as individual with valid value 
        Given Assert User is In Home Page
        When User click Daftar Akun in Header Component
        Then Assert User is in Register Page
        When User set value email address with random generate email in Register Page
        When User set value password with temp1234 in Register Page
        When User set value fullName with test123 in Register Page
        When User set value phoneNumber with 089622123333 in Register Page
        When User click type account with Individu in Register Page
        Then Assert Customer Hint Individu is show in Register Page
        When User click button Register in Register Page
        Then Assert User is in Sign Up Success Page
        
