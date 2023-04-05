const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.get("/main", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.get("/ending", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
app.get("/gallery", function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

var db;

MongoClient.connect((err, client) => {
  if (err) {
    return console.log(err);
  }
  var lastIndex = 0;
  db = client.db("between");
  let id = 1;

  //map 함수를 써서 array로 바꿔주면 됨
  //find 후 모든 데이터 반복해서 Push 할수 있게 짜보기

  //post요청 받은 데이터 userInfo에 추가하기
  app.post("/gallery/userinfo", (req, res) => {
    const { userName, sound1, sound4, sound5, sound6 } = req.body;

    const promise = new Promise((resolve, reject) => {
      db.collection("users")
        .find()
        .sort({ _id: -1 })
        .limit(1)
        .toArray(function (err, res) {
          if (err) throw err;
          console.log(res);
          lastIndex = res[0]._id;
          lastIndex += 1;
          console.log(lastIndex);
          console.log("마지막 인덱스 호출");
          console.log(
            "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ"
          );
          resolve(lastIndex);
        });
    });
    promise.then(function (lastIndex) {
      db.collection("users").insertOne(
        {
          _id: lastIndex,
          userName,
          sound1,
          sound4,
          sound5,
          sound6,
        },
        function (err, res) {
          if (err) throw err;
        }
      );
      res.send("sucsess");
    });
  });

  //db에서 데이터를 모두 찾아 userList에 push

  //get요청시 userList 가져오기
  app.get("/gallery/userinfo", (req, res) => {
    const userList = [];
    const promise = new Promise((resolve, reject) => {
      db.collection("users")
        .find()
        .sort({ _id: -1 })
        .limit(1)
        .toArray(function (err, res) {
          if (err) throw err;
          console.log(res);
          lastIndex = res[0]._id;
          lastIndex += 1;
          console.log(lastIndex);
          console.log("마지막 인덱스 호출");
          console.log(
            "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ"
          );
          resolve(lastIndex);
        });
    });

    promise.then(function (lastIndex) {
      const promise1 = new Promise((resolve, reject) => {
        db.collection("users")
          .find()
          .toArray(function (err, res) {
            if (err) throw err;
            for (var i = 1; i < lastIndex; i++) {
              userList.push(res[i]);
              console.log(userList[i]);
              console.log(i + "인덱스 push완료");
            }
            resolve(userList);
          });
      });
      promise1.then(function (userList) {
        res.send(userList);
      });
    });
  });
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
