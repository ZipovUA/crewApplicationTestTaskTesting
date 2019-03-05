const EmployeeCard = require('./employeeCard');

class EmployeeCardList{
    constructor(number){
        this.containerLocator = `.App-column:nth-child(${number})`;
        this.title = `${this.containerLocator} h2`;
        this.first = new EmployeeCard(this.containerLocator, 1);
        this.second = new EmployeeCard(this.containerLocator, 2);
        this.third = new EmployeeCard(this.containerLocator, 3);
    }

    getAll(){
        debugger
        const result = cy.get(this.containerLocator)
        .find('.CrewMember-container')
        .debug();
        return result;
    }
}

module.exports = EmployeeCardList;