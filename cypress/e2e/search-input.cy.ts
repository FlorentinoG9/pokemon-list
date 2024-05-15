describe('search input', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('search', () => {
    it('should filter pokemon list', () => {
      cy.get('[data-testid=search-input]').type('bulbasaur', { delay: 100 }).should('have.value', 'bulbasaur')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 1)

      cy.url().should('include', 'q=bulbasaur')
    })

    it('should filter pokemon list', () => {
      cy.get('[data-testid=search-input]').type('char', { delay: 100 }).should('have.value', 'char')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 3)

      cy.url().should('include', 'q=char')
    })

    it('should filter pokemon list', () => {
      cy.get('[data-testid=search-input]').type('mew', { delay: 100 }).should('have.value', 'mew')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 2)

      cy.url().should('include', 'q=mew')
    })
  })

  context('clear search', () => {
    it('should clear search', () => {
      cy.get('[data-testid=search-input]').type('bulbasaur', { delay: 150 }).should('have.value', 'bulbasaur')
      cy.get('[data-testid=pokemon-card]').should('have.length', 1)

      cy.get('[data-testid=search-input]').clear().should('not.have.value')
      cy.get('[data-testid=pokemon-list]').children().should('have.length', 151)

      cy.url().should('not.include', 'q=')
    })
  })
})
