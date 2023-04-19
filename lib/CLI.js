const inq = require('inquirer')
const quest = require('./questions');
const { error } = require('console');


function run(connection) {

  img();

    inq.prompt(quest).then(answers => {

      switch (answers.question1) {

        case "View All Employees":
        var query = `SELECT * FROM employees`;
        console.log(query);
        break;

        case "Add Employee":
          var query = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
          var params = [answers.first, answers.last, answers.title, answers.manager];
          
          connection.query(query, params, function (error, results, fields) {
            console.log(results)
          });
          if (answers.addAnother == true) {
            run()
          } else {
            return console
          }

          break; 

        case "Update Employee Role":

        break;

        case "View All Roles":

        break;

        case "Add Role":

        break;

        case "View All Departments":

        break;

        case "Add Department":

        break;

        default:
          console.log("Invalid choice");
          break;
      }
      return answers;
    });
  }


module.exports = run;




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