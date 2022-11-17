const mysql = require("mysql");
const dotenv = require("dotenv");
const { response } = require("./app");
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
  host: 3000,
  user: process.env.USERNAME,
  password: "funtimes@hack",
  database: "question_answer",
  port: "3306",
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  console.log("db " + connection.state);
});
/** @module database
 * Provides access to the better-sqlite3 database object
 * for the project.
/**
 * Have to create 2 databases, the 4th column in your QA databse
 * will be linked to another database
 */

class Dbservice {
  //Creates one instance of the class
  static getDbServiceInstance() {
    return instance ? instance : new Dbservice();
  }

  //Get Data
  async getAllData() {
    try {
      //If Query is successful resolve it, it is unsuccesful reject it and send it to catch block
      const res = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM qatable;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      //console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getPieceOfData() {
    try {
      //If Query is successful resolve it, it is unsuccesful reject it and send it to catch block
      const res = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM qatable ORDER BY ID DESC LIMIT 1;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      //console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async insertNewText(text) {
    try {
      //If Query is successful resolve it, it is unsuccesful reject it and send it to catch block
      const insertId = await new Promise((resolve, reject) => {
        const query = "INSERT INTO qatable (Text) VALUES (?);";
        connection.query(query, [text], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.insertId);
        });
      });
      console.log(insertId);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Dbservice;
