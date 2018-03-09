"use strict";

const sqlite3 = require("sqlite3").verbose();
const { employees } = require("./13-employees.json");

const createTable = () => {
    return new Promise((resolve, reject) => {
        console.log("dropping/creating table");
        db.run(`DROP TABLE IF EXISTS employees`)
            .run(`CREATE TABLE IF NOT EXISTS employees(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstName TEXT,
                lastName TEXT,
                jobTitle TEXT,
                address TEXT
            )`, (err) => {
                if (err) {
                    console.log("createTable() err", err);
                    return reject(err);
                }
                resolve(populate());
            })
    });
};

const populate = () => {
    console.log("populating");
    console.log(employees);
    return Promise.all(employees.map(({ firstName, lastName, jobTitle, address }) => {
        return new Promise((resolve, reject) => {
            console.log(`INSERT INTO employees VALUES (
                null,
                "${firstName}",
                "${lastName}",
                "${jobTitle}",
                "${address}"
            )`);
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

const db = new sqlite3.Database("13-employees.sqlite", () => {
    createTable()
        .then(data => {
        })
        .catch(err => {
        });
});