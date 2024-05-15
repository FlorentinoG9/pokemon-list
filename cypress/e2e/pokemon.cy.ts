describe('pokemon', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('home page', () => {
    it('should have 151 pokemon in the list', () => {
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 151)
    })
  })

  context('search', () => {
    it('should filter pokemon list', () => {
      cy.get('[data-testid=search-input]').type('bulbasaur')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 1)

      cy.url().should('include', 'q=bulbasaur')
    })

    it('should filter pokemon list', () => {
      cy.get('[data-testid=search-input]').type('char')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 3)

      cy.url().should('include', 'q=char')
    })

    it('should filter pokemon list', () => {
      cy.get('[data-testid=search-input]').type('mew')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 2)

      cy.url().should('include', 'q=mew')
    })
  })
})
