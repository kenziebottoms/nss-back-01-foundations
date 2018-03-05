const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("acme.sqlite");

const {customers} = require("./customers");
const {orders} = require("./orders");

db.run("DROP TABLE IF EXISTS customers");
db.run("DROP TABLE IF EXISTS orders");

db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    address TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY,
    orderDate TEXT,
    amount DECIMAL,
    customerId INTEGER
)`);

orders.forEach(({orderDate, amount, customerId}) => {
    setTimeout(() => db.run(`INSERT INTO orders VALUES (null, "${orderDate}", ${amount}, ${customerId});`), 1000);
});

customers.forEach(({firstName, lastName, address}) => {
    setTimeout(() => db.run(`INSERT INTO customers VALUES (null, "${firstName}", "${lastName}", "${address}");`), 1000);
});

db.all(`SELECT orderDate, amount
    FROM orders o
    JOIN customers c
    ON o.customerId = c.id
    WHERE c.id = 2`, err => {
        console.log(err);
    })