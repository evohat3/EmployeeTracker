const mysql = require("mysql2/promise");
const quest = require("./lib/questions");
const run = require('./lib/CLI');
const sql = require('console.table')
const connection = require('./lib/connection');

run(connection);


// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: password,
//   database: 'crusader_db'
// })
// .then((connection) => {
//   console.log('Connected to database');
//    connection;
// })
// .then((connection) => {
//   run(connection)
// })
// .catch((error) => {
//   console.error('Error connecting to database: ', error);
// });

// module.exports = connection;


// const connectionDetails = {
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: password,
//   database: 'crusader_db'
// };

// mysql.createConnection(connectionDetails)
//   .then((connection) => {
//     // Pass the connection object to the run function
//     function run(quest, connection) {
//       console.log("Welcome to the Crusader Employee Manager\n");

//       inq.prompt(quest).then(answers => {
//         console.log("Answers:", answers);
//     });
//   }


//   })
//   .catch((error) => {
//     console.error('Error connecting to database: ', error);
//   }); 



// async function init() {
//   try {
//     const connection = await mysql.createConnection({
//       host: "localhost",
//       port: 3306,
//       user: "root",
//       password: password,
//       database: "crusader_db",
//     });

//     console.log("Connected!");

//     const answers = await quest.askQuestions();

//     if (answers.question1 === "View All Employees") {
//       const [rows, fields] = await connection.execute("SELECT * FROM employees");
//       console.table(rows);
//     }

//     run(connection);

//     connection.end();
//   } catch (err) {
//     console.error(err);
//   }
// }

// init();