const queries = {
    getAllEmployees: `SELECT * FROM employees`,
    addEmployee: `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
    updateEmployeeRole: `UPDATE employees SET role_id = ? WHERE id = ?`,
    getAllRoles: `SELECT * FROM roles`,
    addRole: `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
    getAllDepartments: `SELECT * FROM departments`,
    addDepartment: `INSERT INTO departments (name) VALUES (?)`,
  };
  
  module.exports = queries;