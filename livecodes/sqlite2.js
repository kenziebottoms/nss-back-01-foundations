"use strict";

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("company.sqlite", err => {
    if (err) return console.log(err);

    console.log("Connected");
    require("./create-table")()
        .then(() => {
            return populateEmployees()
        })
        .then(() => {
            getEmployees();
        });
});

const populateEmployees = () => {
    const {employees} = require("./employees.json");
    return new Promise((resolve, reject) => {
        employees.forEach(({id, firstName, lastName, dept, salary}) => {
            db.run(`INSERT INTO employees VALUES (${id}, "${firstName}", "${lastName}", ${salary}, "${dept}")`);
        })
    });
};

const getEmployees = () => {
    db.all(`SELECT * FROM employees`, (err, data) => {
        if (err) return console.log(err);
        console.log("all rows", data);
        data.sort((a,b) => a.firstlocaleCompare(b.first))
            .filter(e =>  e.salary >= 50)
            .forEach(e => console.log(`${e.firstName} ${e.lastName}'s salary: ${e.salary}`));
    });
};