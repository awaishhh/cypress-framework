/// <reference types= "cypress"/>

it("login", ()=>{
    cy.visit("https://demo1.folio3.com:8983/cattleview/login")
    cy.get('#username').type('maryambatool')
    cy.get('#password').type('Folio2019!')
    cy.get('#Login').click().should('contain','login')

})