const roleMap = {
    "Manager": 1,
    "CSR": 2,
    "Officer": 3,
    "UnderWriter": 4
  };

const quest = [
{
    type: "list",
    name: "question1",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
},
// ** ADD EMPLOYEE QUESTION TREE
{
    type: "input",
    name: "first",
    message: "What is the First name?",
    when: (answers) => answers.question1 === "Add Employee",
},
{
    type: "input",
    name: "last",
    message: "What is the Last name?",
    when: (answers) => answers.question1 === "Add Employee" && answers.first,
},
{
    type: "list",
    name: "title",
    message:"What is their role?",
    choices: ["Manager", "CSR", "Officer", "UnderWriter"],
    when: (answers) => answers.question1 === "Add Employee" && answers.last,
    filter: (answer) => roleMap[answer],
},
{
    type: "input",
    name: "manager",
    message: "Who is their manager?",
    when: (answers) => answers.question1 === "Add Employee" && answers.title,
},
];

module.exports = quest;

