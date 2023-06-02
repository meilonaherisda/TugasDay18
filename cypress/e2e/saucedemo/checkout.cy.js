describe('template spec', () => {
  it('success Add to cart', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include','cart.html')
    


  })
  it('checkout', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Marissa')
    cy.get('[data-test="lastName"]').type('A')
    cy.get('[data-test="postalCode"]').type('213456')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include','checkout-step-two.html')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('be.visible')
  })
})