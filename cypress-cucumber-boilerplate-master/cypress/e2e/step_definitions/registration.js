import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/RegistrationPage");

Given("A user opens a democasino website", () => {
  cy.visit("/");
  loginPage.clickCloseModal();
  cy.contains("SIGN UP");
  loginPage.clickSingUp();
});
When("A user provides credentials for registration", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.email);
    loginPage.typeEmail(row.email);
    cy.log(row.currency);
    loginPage.clickLabel();
    loginPage.clickSelectCurrency();
    loginPage.selectCurrency(row.currency);
    loginPage.typePassword(row.password);
    cy.log(row.password);
    loginPage.typeConfirmationPassword(row.confirmationPassword);
    cy.log(row.confirmationPassword);
    loginPage.clickSelectSecretQuestion();
    loginPage.SelectSecretQuestion(row.secretQuestion);
    cy.log(row.secretQuestion);
    loginPage.typeAnswer(row.answer);
    cy.log(row.answer);
    loginPage.typeUsername(row.username);
    cy.log(row.username);
    loginPage.typeAddress(row.address);
    cy.log(row.address);
    //loginPage.clickSelectCountry();
    loginPage.SelectCountry(row.country);
    cy.log(row.country);
    loginPage.typeCity(row.city);
    cy.log(row.city);
    loginPage.typePoscode(row.poscode);
    cy.log(row.poscode);
    loginPage.typeName(row.name);
    cy.log(row.name);
    loginPage.typeSurname(row.surname);
    cy.log(row.surname);
    loginPage.typeMiddlename(row.middlename);
    cy.log(row.middlename);
    loginPage.clickSelectGender();
    loginPage.SelectGender(row.gender);
    cy.log(row.gender);
    loginPage.typeNickname(row.nickname);
    cy.log(row.nickname);
  });
});
And("A user clicks on the registration button", () => {
  loginPage.clickCreateAccount();
});
Then("The code is generated and sent to the mailing address", () => {
  cy.url().should("contains", "/confirm/email");
});

