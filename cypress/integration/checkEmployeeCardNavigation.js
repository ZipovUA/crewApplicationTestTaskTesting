const EmployeeCard = require('../support/pageObjects/employeeCard');
// TODO: we need to add and use own cy command getEmployeeCardByName(columnName, employeeName) 
// that will return employeeCard - so we don't need specify on what position this card should be
// as result our tests will be more stable and true

describe('Check employee card navigation', () => {
    const page = require('../support/pageObjects/inex');
    const dataColumns = page.dataContainer.columns;
    before( () =>{
        cy.visit('/');
    });

    afterEach( () =>{
        cy.reload();
    });

    it('Navigate card from "Applied" to "Interviewed" state', () => {
        cy.get(dataColumns.applied.first.toolBar.goForwardButton).click();
        cy.get(dataColumns.interviewing.first.name)
        .should('have.text', 'lloyd gonzalez');
    });

    it('Navigate card from "Interviewed" to "Hired" state', () => {
        cy.get(dataColumns.applied.first.toolBar.goForwardButton).click();
        cy.get(dataColumns.interviewing.first.toolBar.goForwardButton).click();
        cy.get(dataColumns.hired.second.name)
        .should('have.text', 'lloyd gonzalez');
    });

    it('Navigate card back from "Hired" to "Inverviewed" state', () => {
        cy.get(dataColumns.hired.first.toolBar.goBackButton).click();
        
        cy.get(dataColumns.interviewing.first.name)
        .should('have.text', 'julia cunningham');
    });

    it('Navigate card back from "Interviewed" to "Applied" state', () => {
        cy.get(dataColumns.applied.first.toolBar.goForwardButton).click();
         
        cy.get(dataColumns.interviewing.third.name)
        .should('have.text', 'danielle moore');

        cy.get(dataColumns.interviewing.third.toolBar.goBackButton).click();
        
        cy.get(dataColumns.applied.first.name)
        .should('have.text', 'danielle moore');
    });    
});