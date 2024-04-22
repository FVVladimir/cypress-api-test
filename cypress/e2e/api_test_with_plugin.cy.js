describe('placeholder tests;', () => {
  
  it('users', () => {
    cy.api({url:'/users'}).then(response => {

      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK')
      expect(response.body.length).to.eq(10)
      cy.wrap(response.body[1].name).should('eq', 'Ervin Howell')
      cy.wrap(response.body[1].username).should('eq', 'Antonette')
    })
  })
  it('posts', () => {
    cy.api({url:'/posts'}).then(response => {

      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK')
      expect(response.body.length).to.eq(100)
      // cy.wrap(response.body[0].name).should('eq', 'Leanne Graham')
    })
  })
  it('todos', () => {
    cy.api({url:'/todos'}).then(response => {

      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK')
      expect(response.body.length).to.eq(200)
      cy.wrap(response.body[1].id).should('eq', 2)
      cy.wrap(response.body[1].completed).should('eq', false)
    })
  })
  it('photos', () => {
    cy.api({url:'/photos'}).then(response => {

      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK')
      expect(response.body.length).to.eq(5000)
      cy.wrap(response.body[2011].id).should('eq', 2012)
      cy.wrap(response.body[0].title).should('eq', 'accusamus beatae ad facilis cum similique qui sunt')
    })
  })
  it('comments', () => {
    cy.api({url:'/comments'}).then(response => {

      console.log(response)
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK')
      expect(response.body.length).to.eq(500)
      cy.wrap(response.body[0].id).should('eq', 1)
      cy.wrap(response.body[0].email).should('eq', 'Eliseo@gardner.biz')
    })
  })
})