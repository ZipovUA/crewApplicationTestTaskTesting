/// <reference types="Cypress" />

describe('Check page elements', () => {
    const page = require('../support/pageObjects/inex');
    
    before( () =>{
        cy.visit('/');
    });

    it('check header', () => {
        cy.get(page.header)
        .should('be.visible');
    });

    it('Check page elements', () => {
        cy.get(page.filterPanel.containerLocator)
        .should('contain', 'Name:')
        .should('contain', 'City:')

        cy.get(page.filterPanel.submitButton)
        .should('be.visible');

        cy.get(page.filterPanel.clearButton)
        .should('be.visible');
    });

    it('check data container', () => {
        const dataContainer = page.dataContainer;
        cy.get(dataContainer.containerLocator)        
        .should('be.visible');

        cy.get(dataContainer.columns.applied.title)
        .should('have.text', 'Applied')

        cy.get(dataContainer.columns.interviewing.title)
        .should('have.text', 'Interviewing')

        cy.get(dataContainer.columns.hired.title)
        .should('have.text', 'Hired')

        cy.get(dataContainer.columns.applied.first.name)
        .should('be.visible');

        cy.get(dataContainer.columns.applied.first.photo)
        .should('be.visible');

        cy.get(dataContainer.columns.applied.first.city)
        .should('be.visible');

        cy.get(dataContainer.columns.applied.first.toolBar.goForwardButton)
        .should('be.visible');

        cy.get(dataContainer.columns.hired.first.toolBar.goBackButton)
        .should('be.visible');


    })
});