DROP DATABASE IF EXISTS crusader_db;
CREATE DATABASE crusader_db;

USE crusader_db;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30)
);

CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
FOREIGN KEY (role_id) REFERENCES roles(id),
  manager_id INT
);