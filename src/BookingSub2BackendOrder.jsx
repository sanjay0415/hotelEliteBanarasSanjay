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
  database: "hotelordereb",
});

app.post("/create", (req, res) => {
  const name = req.body.name; //this 3 names should be same as other 3 names in frontend
  const phoneNumber = req.body.phoneNumber;
  const mail = req.body.mail;
  const address = req.body.address;
  const order = req.body.order;

  db.query(
    "INSERT INTO ordertable(name, branch, feedback, address, order)VALUES(?,?,?,?,?)",
    [name, phoneNumber, mail, address, order],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Successfully sent to backend");
      }
    }
  );
});

app.listen(3003, () => {
  console.log("server is running on port 3003");
});
