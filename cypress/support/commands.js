const commonPage = require(`./pageObjects/inex`); 
const EmployeeCard = require('./pageObjects/employeeCard');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('filterEmployees', (name, city) => {
    const filterPanel = commonPage.filterPanel;
    if (name) cy.get(filterPanel.fullName.inputField).clear().type(name);
    if (city) cy.get(filterPanel.city.inputField).clear().type(city);
    cy.get(filterPanel.submitButton).click();
});

Cypress.Commands.add('getEmployeeCardByName', (columnName, employeeName) =>{
    debugger
    //const allCardsInColumn = cy.get('.CrewMember-container')//commonPage.dataContainer.columns[columnName].getAll();
    //let resultCardElement = null;
    
    //cy.get(allCardsInColumn[0].selector).debug();
    //cy.log(`allCardsInCOlumn length -> ${allCardsInColumn.length}`);
    /*
    for (let i=0; i< allCardsInColumn.length; i++){
        const currentEl = new EmployeeCard(allCardsInColumn[i].selector);
        cy.get(currentEl.name).debug();
        if (cy.get(currentEl.name).should('contain', employeeName)) resultCardElement = currentEl;
    }
    */
    
   debugger
   cy.get('.CrewMember-container').each((el, inex, list)=>{
        
        const currentEl = new EmployeeCard(el.getSelector());
        currentEl.debug();
        //if (currentEl.find(currentEl.name == employeeName))
    });
    
   return resultCardElement;
})

Cypress.Commands.add('getEmployeeCardByCity', (columnName, employeeCity) =>{

})