describe('adicione uma tarefa', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('adicionar tarefa').click
    cy.get('#add-btn').click();
  })
})