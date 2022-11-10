const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const mysql = require("mysql2");

const mongoose = require("mongoose");


var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Dcunha@2002",
  database: "college",
});

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/doctors", (req, res) => {
  const q = "select * from doctor";
  db.query(q, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});