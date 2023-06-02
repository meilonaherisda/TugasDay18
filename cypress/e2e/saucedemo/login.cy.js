describe('Login', () => {
  it('success Login', () => {
    cy.visit('https://www.saucedemo.com/')
    // Cypress.config('chromeWebSecurity',false);
    //cy.visit('http://www.saucedemo.com/', { timeout: 3000 })
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('be.visible')
    cy.url().should('include','inventory.html')
    cy.get('.shopping_cart_link')

  })

  it('failed Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('xxx')
    cy.get('[data-test="login-button"]').click()
    //cy.get('.title').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible')
  
  })

})