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
    const selector = `${dataColumns[columnName].containerLocator} .CrewMember-container:has(.CrewMemeber-name div:nth-child(1):contains(${employeeName}))`;
    return new EmployeeCard(selector);   
})

Cypress.Commands.add('getEmployeeCardByCity', (columnName, employeeCity) =>{
    const selector = `${dataColumns[columnName].containerLocator} .CrewMember-container:has(.CrewMemeber-name div:nth-child(2):contains(${employeeCity}))`;
    return new EmployeeCard(selector);   
})