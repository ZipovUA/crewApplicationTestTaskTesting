const EmployeeCardList = require('./employeeCardList');

class DataContainer{
    constructor() {
        this.containerLocator = '.App-container';
        this.columns = {
            applied: new EmployeeCardList(1),
            interviewing: new EmployeeCardList(2),
            hired: new EmployeeCardList(3)
        }
    }
}

module.exports = new DataContainer();