import userInterception from "../fixtures/userInterception.json";

describe("interception", () => {

    it("interception user", () => {
        cy.intercept('GET', '**/userInterception', userInterception);
        cy.visit('https://qauto.forstudy.space/', {
            auth: {

                username: 'guest',
                password: 'welcome2qauto',
            }            
    })
       cy.contains('Sign In').click()
       cy.get('#signinEmail').type('emir@ua.fm')
       cy.get('#signinPassword').type('Qwerty12345')
       cy.contains('Login').click()
    //    cy.contains('Profile').click()
  })
})