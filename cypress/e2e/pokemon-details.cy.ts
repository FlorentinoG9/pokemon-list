describe('pokemon', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('pokemon details', () => {
    it('should show pokemon details', () => {
      cy.get('[data-testid=pokemon-list]').children().first().click()
      cy.get('[data-testid=pokemon-name]').should('exist')
    })
  })
})
