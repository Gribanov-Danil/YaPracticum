export {}
const openIngredientModal = () => {
  cy.get('[data-cy="ingredient"]').first().click()
  cy.url().should("include", "/ingredients")
}

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should open modal when click on ingredient", () => {
    openIngredientModal()
  })

  it("should open modal when click on ingredient and then closed when click on closeIcon", () => {
    openIngredientModal()
    cy.get('[data-cy="close-modal-closeIcon"]').click()
    cy.location().should("match", /\//)
  })

  it("should open modal when click on ingredient and then closed when click on overlay", () => {
    openIngredientModal()
    cy.get('[data-cy="close-modal-overlay"]').click("left")
    cy.location().should("match", /\//)
  })

  const addIngredient = () => {
    const dataTransfer = new DataTransfer()
    cy.get('[data-cy="ingredient"]').first().trigger("dragstart", {
      dataTransfer,
    })
    cy.get('[data-cy="drop-area"]').trigger("drop", {
      dataTransfer,
    })
  }

  it("should drag ingredient to constructor", () => {
    addIngredient()
  })

  it("should make order ", () => {
    cy.visit("login")
    cy.get('[data-cy="login-email"]').type("gribanovtestwork2022@yandex.ru")
    cy.get('[data-cy="login-password"]').type("qwerty")
    cy.get('[data-cy="login-button"]').click()
    cy.location().should("match", /\//)
    addIngredient()
    cy.get('[data-cy="order-btn"]').click()
    cy.wait(20000)
    cy.get('[data-cy="order-details"]').should("exist")
    cy.get('[data-cy="close-modal-closeIcon"]').click()
  })
})
