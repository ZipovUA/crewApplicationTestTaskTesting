class EmployeeCard{
    constructor(parentLocator, number = 1){
        this.containerLocator = `${parentLocator} .CrewMember-container:nth-child(${number+1})`;
        this.photo = `${this.containerLocator} .CrewMemeber-photo`;
        this.name = `${this.containerLocator} .CrewMemeber-name div:nth-child(1)`;
        this.city = `${this.containerLocator} .CrewMemeber-name div:nth-child(2)`;
        this.toolBar = new EmployeeCardToolBar(this.containerLocator);
    }
}

class EmployeeCardToolBar{
    constructor(parentLocator){
        this.containerLocator = `${parentLocator} .CrewMember-toolbar`
        this.goBackButton = `${this.containerLocator} button:not(.CrewMember-up)`;
        this.goForwardButton = `${this.containerLocator} button.CrewMember-up`;
    }
}

module.exports = EmployeeCard;