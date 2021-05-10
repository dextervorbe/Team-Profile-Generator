const Employee =  require('./Employee');

class Intern extends Employee {
    constructor(school, name, email, id){
       super(name, email, id)
       this.school = school;
    }
}


module.exports = Intern;