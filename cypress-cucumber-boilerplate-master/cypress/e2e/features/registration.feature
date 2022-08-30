Feature: Registration page

    Feature Registration page of the function will work based on the user's credentials.

    Background:
        Given A user opens a democasino website
    Scenario: User registration
        When A user provides credentials for registration
            | email | currency     | password | confirmationPassword | secretQuestion | answer | username | address | country | city | poscode | name | surname | middlename | gender | nickname | 
            | jjmunoz36@misena.edu.co | EUR | TestAutomation1* | TestAutomation1* | The street your grew up on | Test | Jhon2022222 | calle 15 | Colombia | Bogota | 1234 | Jhon | Muñoz | Jhon Muñoz | Female | JhonAutoma123 | 
        And A user clicks on the registration button
        Then The code is generated and sent to the mailing address
        
 