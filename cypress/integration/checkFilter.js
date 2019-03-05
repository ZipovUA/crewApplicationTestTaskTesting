/// <reference types="Cypress" />

describe('Check Filter', function(){
    const page = require('../support/pageObjects/inex');

    before( () =>{
        cy.visit('/');
    });

    afterEach( () =>{
        cy.get(page.filterPanel.clearButton).click();
    })

    it('Filter by name', function(){
        cy.filterEmployees('emma');
        
        cy.log(`searched object is -> ${page.dataContainer.columns.applied}`);
        cy.log(`searched object is -> ${page.dataContainer.columns.applied.first}`);

        cy.get(page.dataContainer.columns.applied.first.name)
        .should('have.text', 'emma stewart');

        cy.get(page.dataContainer.columns.applied.first.city)
        .should('have.text', 'worcester');

    });

    it('Filter by city', function(){
        cy.filterEmployees(null, 'worcester');
        
        cy.get(page.dataContainer.columns.applied.first.name)
        .should('have.text', 'emma stewart');

        cy.get(page.dataContainer.columns.applied.first.city)
        .should('have.text', 'worcester');
    });

    it('Filter by name and city', function(){
        cy.filterEmployees('emma', 'worcester');
        
        cy.get(page.dataContainer.columns.applied.first.name)
        .should('have.text', 'emma stewart');

        cy.get(page.dataContainer.columns.applied.first.city)
        .should('have.text', 'worcester');
    });
});