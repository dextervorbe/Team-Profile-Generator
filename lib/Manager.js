const Employee =  require('./Employee');


class Manager extends Employee {
    constructor(id, office, name, email){
       super(id, name, email)
       this.office = office;
    }
}

module.exports = Manager;