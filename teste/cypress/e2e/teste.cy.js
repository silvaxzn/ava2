describe('teste se o projeto aceita caracteres diferentes', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get("#task-input").type('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz')
  })
})