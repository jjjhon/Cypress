///
class homeSaucePage {
  elements = {
    errorMessage: () => cy.get('h3[data-test="error"]'),
    closeModal: () => cy.get('.mfp-close'), 
    singUp: () => cy.get('.header-button--registration'),
    emailInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_email"),
    label: () => cy.get("label"),
    currencySelect1: () => cy.get("span"),
    currencySelect: () => cy.get("li"),
    passwordInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_password"),
    confirmationPasswordInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation"),
    secretQuestionSelect1: () => cy.get("span"),
    secretQuestionSelect: () => cy.get("li"),
    answerInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_secret_answer"),
    usernameInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_username"),
    addressInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_address"),
    countrySelect1: () => cy.get("span"),
    countrySelect: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_country"),
    cityInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_city"),
    poscodeInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_postcode"),
    nameInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_name"),
    surnameInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_surname"),
    middleNameInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_middle_name"),
    genderSelect1: () => cy.get("span"),
    genderSelect: () => cy.get("li"),
    nicknameInput: () => cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_nickname"),    
    createAccount: () => cy.get(".button--s4 > span"),
  };

  clickCloseModal() {
    this.elements.closeModal().click();
  }

  clickSingUp() {
    this.elements.singUp().click();
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  clickLabel() {
    this.elements.label().contains("I unconditionally agree with Terms & Conditions, Data Policy, Cookie Policy and that I am older than 21 years old").click();
  }

  clickSelectCurrency() {
    this.elements.currencySelect1().contains("USD").click();
  }

  selectCurrency(currency) {
    this.elements.currencySelect().contains(currency).click();
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typeConfirmationPassword(confirmationPassword) {
    this.elements.confirmationPasswordInput().type(confirmationPassword);
  }

  clickSelectSecretQuestion() {
    this.elements.secretQuestionSelect1().contains("Secret question").click();
  }

  SelectSecretQuestion(secretQuestion) {
    this.elements.secretQuestionSelect().contains(secretQuestion).click();
  }

  typeAnswer(answer) {
    this.elements.answerInput().type(answer);
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typeAddress(address) {
    this.elements.addressInput().type(address);
  }

  clickSelectCountry() {
    this.elements.countrySelect1().contains("Choose your country").click();
  }

  SelectCountry(country) {
    this.elements.countrySelect().select(country , { force: true }).invoke('val').should('eq', '45');
    
  }
  
  typeCity(city) {
    this.elements.cityInput().type(city);
  }
  
  typePoscode(poscode) {
    this.elements.poscodeInput().type(poscode);
  }
  
  typeName(name) {
    this.elements.nameInput().type(name);
  }
  
  typeSurname(surname) {
    this.elements.surnameInput().type(surname);
  }
  
  typeMiddlename(middlename) {
    this.elements.middleNameInput().type(middlename);
  }

  clickSelectGender() {
    this.elements.genderSelect1().contains("Select gender").click();
  }

  SelectGender(gender) {
    this.elements.genderSelect().contains(gender).click();
  }

  typeNickname(nickname) {
    this.elements.nicknameInput().type(nickname);
  }

  clickCreateAccount() {
    this.elements.createAccount().click();
  }
}

module.exports = new homeSaucePage();
