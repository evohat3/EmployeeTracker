DROP DATABASE IF EXISTS arcorp_db;
CREATE DATABASE arcorp_db;

USE arcorp_db;

CREATE TABLE departments (
  id INT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE roles (
  id INT PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);