/// <reference types="Cypress" />

describe('Check page elements', function(){
    const page = require('../support/pageObjects/inex');
    
    before( () =>{
        cy.visit('/');
    });

    it('check header', function(){
        cy.get(page.header)
        .should('be.visible');
    });

    it('Check page elements', function(){
        cy.get(page.filterPanel.containerLocator)
        .should('contain', 'Name:')
        .should('contain', 'City:')

        cy.get(page.filterPanel.submitButton)
        .should('be.visible');

        cy.get(page.filterPanel.clearButton)
        .should('be.visible');
    });

    it('check data container', function(){
        cy.get(page.dataContainer.containerLocator)        
        .should('be.visible');

        cy.get(page.dataContainer.columns.applied.title)
        .should('have.text', 'Applied')

        cy.get(page.dataContainer.columns.interviewing.title)
        .should('have.text', 'Interviewing')

        cy.get(page.dataContainer.columns.hired.title)
        .should('have.text', 'Hired')
    })
});