describe('pokemon', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('home page', () => {
    it('should have 151 pokemon in the list', () => {
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 151)
    })
  })


  context('pokemon details', () => {
    it('should show pokemon details', () => {
      cy.get('[data-testid=pokemon-list]').children().first().click()
      cy.get('[data-testid=pokemon-name]').should('exist')
    })
  })
})
