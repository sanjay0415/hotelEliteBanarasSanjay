//express backend

const express = require("express");
const app = express();
const mySql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mySql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "hotelfeedbackeb",
});

app.post("/create", (req, res) => {
  const name = req.body.name; //this 3 names should be same as other 3 names in frontend
  const branch = req.body.branch;
  const feedback = req.body.feedback;

  db.query(
    "INSERT INTO feedbacktable(name, branch, feedback)VALUES(?,?,?)",
    [name, branch, feedback],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Successfully sent to backend");
      }
    }
  );
});

app.listen(3002, () => {
  console.log("server is running on port 3002");
});
