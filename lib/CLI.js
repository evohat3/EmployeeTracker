const inq = require('inquirer')
const quest = require('./questions');
const { error } = require('console');
const queries = require('./queries');
const consoleTable = require('console.table');


function run(connection) {
  
  img();

   inq.prompt(quest).then(answers => {
      switch (answers.question1) {

        case "View All Employees":
    
        connection.query(queries.getAllEmployees, function(error, results, fields) {
          if (error) throw error;
          console.table(results);
          backToMenu(connection);
        })
        break;

        case "Add Employee":
          var params = [answers.first, answers.last, answers.title, answers.manager];
          var first = answers.first
          var last = answers.last
          
          connection.query(queries.addEmployee, params, function (error, results, fields) {
            console.log(`employee ${first} ${last} was added!`)
            backToMenu(connection)
          });


          break; 

        case "Update Employee Role":
          backToMenu(connection)
        break;

        case "View All Roles":
          query = `SELECT * FROM roles`;
        connection.query(queries.getAllRoles, function(error, results, fields) {
          if (error) throw error;
          console.table(results);
          backToMenu(connection)
        })

        break;

        case "Add Role":
          backToMenu(connection)
        break;

        case "View All Departments":
          query = `SELECT * FROM departments`;
          connection.query(queries.getAllDepartments, function(error, results, fields) {
            if (error) throw error;
            console.table(results);
            backToMenu(connection)
          })

        break;

        case "Add Department":
          backToMenu(connection)
        break;

        default:
          console.log("Invalid choice");
          break;
      }
    });
  }


module.exports = run;


function backToMenu(connection) {
  inq.prompt([
    {
      type: "confirm",
      name: "backToMenu",
      message: "Would you like to go back to the main menu?",
      default: true
    }
  ]).then(answer => {
    if (answer.backToMenu) {
      run(connection);
    } else {
      console.log("Goodbye!");
      connection.end();
    }
  });
}



function img() {

  console.log(`
  .d8888b.                                          888                  
  d88P  Y88b                                         888                  
  888    888                                         888                  
  888        888d888 888  888 .d8888b   8888b.   .d88888  .d88b.  888d888 
  888        888P"   888  888 88K          "88b d88" 888 d8P  Y8b 888P"   
  888    888 888     888  888 "Y8888b. .d888888 888  888 88888888 888     
  Y88b  d88P 888     Y88b 888      X88 888  888 Y88b 888 Y8b.     888     
   "Y8888P"  888      "Y88888  88888P' "Y888888  "Y88888  "Y8888  888     
                                                                          
                                                                          
                                                                          
  8888888               888                   888            d8b                   
    888                 888                   888            Y8P                   
    888                 888                   888                                  
    888   88888b.   .d88888 888  888 .d8888b  888888 888d888 888  .d88b.  .d8888b  
    888   888 "88b d88" 888 888  888 88K      888    888P"   888 d8P  Y8b 88K      
    888   888  888 888  888 888  888 "Y8888b. 888    888     888 88888888 "Y8888b. 
    888   888  888 Y88b 888 Y88b 888      X88 Y88b.  888     888 Y8b.          X88 
  8888888 888  888  "Y88888  "Y88888  88888P'  "Y888 888     888  "Y8888   88888P' 
  
  ##########################################################################################
  ##########################################################################################
  
  `);

}