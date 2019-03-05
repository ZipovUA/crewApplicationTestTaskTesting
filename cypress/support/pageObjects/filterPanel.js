class FilterPanel{
    constructor(){
        this.containerLocator = '#filters';
        this.fullName = {
            inputField: `${this.containerLocator} #name`,
            label: `${this.containerLocator} `
        }
        
        this.city = {
            inputField: `${this.containerLocator} #city`,
            label: `${this.containerLocator} `
        }
        this.submitButton = `${this.containerLocator} button[type="submit"]`;
        this.clearButton  = `${this.containerLocator} button[type="button"]`;
    }
}

module.exports = new FilterPanel();