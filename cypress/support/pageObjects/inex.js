//const FilterPanel = require(`./filterPanel`);
//const DataContainer = require(`./dataContainer`);

class CommonPage{
    constructor(){
        this.header = '.App-header';
        this.filterPanel = require(`./filterPanel`);
        this.dataContainer = require(`./dataContainer`);
    }
    
}

module.exports = new CommonPage();