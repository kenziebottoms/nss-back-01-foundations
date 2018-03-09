"use strict";

const sqlite3 = require("sqlite3").verbose();
const { employees } = require("./13-employees.json");

const createTable = () => {
    return new Promise((resolve, reject) => {
        db.run(`DROP TABLE IF EXISTS employees`)
            .run(`CREATE TABLE IF NOT EXISTS employees(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT,
                lastName TEXT,
                jobTitle TEXT,
                address TEXT
            )`, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(populate());
            })
    });
};

const populate = () => {
    return Promise.all(employees.map(({ firstName, lastName, jobTitle, address }) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO employees VALUES (
                null,
                "${firstName}",
                "${lastName}",
                "${jobTitle}",
                "${address}"
            )`, function(err) {
                if (err) return reject(err);
                resolve(this.lastID);
            });
        });
    }));
};

const getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM employees`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

const getJobTitles = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT jobTitle FROM employees`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

const getNamesAddresses = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT firstName, lastName, address FROM employees`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

const db = new sqlite3.Database("13-employees.sqlite", () => {
    createTable()
        .then(data => {
            return getAllEmployees();
        })
        .then(employees => {
            console.log("==============================================\nEmployees\n---------");
            console.log(employees);
            return getJobTitles();
        })
        .then(jobTitles => {
            console.log("==============================================\nJob Titles\n----------");
            jobTitles.map(e => console.log(e.jobTitle));
            return getNamesAddresses();
        })
        .then(namesAddresses => {
            console.log("==============================================\nNames and Addresses\n-------------------");
            namesAddresses.map(e => console.log(`${e.firstName} ${e.lastName}:      \t${e.address}`));
        })
        .catch(err => {
        });
});