function User(fname, jtitle, slry, stat) {

this.firstname = fname;
this.jobtitle = jtitle;
this.salary = slry;
this.status = stat;
    
}

var employees = new User("The Kraken", "Sea Monster", "$HUMANSOULS", "Eternal overtime"); 
var employees = new User("Brad", "Sales", "$38,000", "Working"); 
var employees = new User("Valerie", "Receptionist", "$25,000", "Not Working"); 
var employees = new User("Steven", "CEO", "$120,000", "Working"); 

console.log(User);