describe('pokemon', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('home page pokemon list', () => {
    it('should have 151 pokemon in the list', () => {
      cy.get('[data-testid=pokemon-list]')
        .children()
        .should('have.length', 151)
    })
  })
})
