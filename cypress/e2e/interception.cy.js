import userInterception from "../fixtures/userInterception.json";

describe("interception", () => {

    it("interception user", () => {
        cy.intercept('https://qauto.forstudy.space/api/users/profile',userInterception);
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
       cy.get('.icon-profile').click()
       cy.get('.profile_name').should("have.text","Polar Bear")
       cy.get('li:nth-child(1)').should("have.text","11.11.2011")
       cy.get('li').last().should("have.text","USA")
  })
})