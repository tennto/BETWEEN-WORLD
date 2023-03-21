const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://tony4636:tqnXwAS6VjoNdz9F@cluster0.rvdyqne.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    db = client.db("betweenworld");

    db.collection("between").insertOne(
      { id: 1, 이름: "John", 나이: 20 },
      (err, res) => {
        console.log("저장완료");
      }
    );
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "build/index.html"));
    });
    app.listen(3000, () => {
      console.log("3000");
    });
  }
);

app.post("/gallery", (req, res) => {
  req.send("전송완료");
  console.log(req.body.data);
  // db.collection("between").insertOne(
  //   { id: 1, 사운드1 : req.body.sound1 , 사운드2 : req.body.sound2  },
  //   (err, res) => {
  //     console.log("저장완료");
  //   }
  // );
});
