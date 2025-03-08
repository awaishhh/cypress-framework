/// <reference types= "cypress"/>

import { login } from "./Pages/login"

describe('template spec', () => {
  const logininstance = new login();
  it('passes', () => {
   
    logininstance.username_textbox('maryambatool');
    logininstance.password_textbox('Folio2019!');
    logininstance.login_button();
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
  });
});