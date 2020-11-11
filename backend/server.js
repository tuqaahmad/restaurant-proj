const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const Customers = require("./models/customers");
const Books = require("./models/books");
const Delivery = require("./models/delivery");

var MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

//connect to mongo db
const dbURI = process.env.DB_CONNECTION;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

//LOGIN POST
app.post("/login", (req, res) => {
  let body = req.body;
  console.log(body);
  //customers
  Customers.findOne({ email: body.email, password: body.password })
    .then((result) => {
      if (result) {
        // res.status(200).json({ success: true, error: "Logged in" });
        res.status(200).send(result);
      } else {
        res
          .status(400)
          .json({ success: false, error: "Sorry, Wrong Credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//SIGNUP POST
app.post("/signup", (req, res) => {
  const customers = new Customers(req.body);

  customers
    .save()
    .then((result) => {
      if (result) {
        res.status(200).json({ success: true, error: "Signned up" });
      } else {
        res
          .status(400)
          .json({ success: false, error: "Sorry, Error in registeration" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST BOOK A TABLE
app.post("/bookings", (req, res) => {
  const Book = new Books(req.body);

  Book.save()
    .then((result) => {
      if (result) {
        res.status(200).json({ success: true, error: "Booked" });
      } else {
        res
          .status(400)
          .json({ success: false, error: "Sorry, Error in Booking" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST DELIVERY
app.post("/delivery", (req, res) => {
  const Del = new Delivery(req.body);

  Del.save()
    .then((result) => {
      if (result) {
        res.status(200).json({ success: true, error: "Will be Delivered" });
      } else {
        res
          .status(400)
          .json({ success: false, error: "Sorry, Error in Delivery" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//GET ALL CUSTOMERS
app.get("/customers", (req, res) => {
  MongoClient.connect(dbURI, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SeaFoodie");
    //Find the first document in the customers collection:
    dbo
      .collection("customers")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        else {
          // console.log(result);
          res.send(result);
          db.close();
        }
      });
  });
});

//GET ALL BOOKINGS
app.get("/bookings", (req, res) => {
  MongoClient.connect(dbURI, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("SeaFoodie");
    //Find the first document in the books collection:
    dbo
      .collection("books")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        else {
          res.send(result);
          db.close();
        }
      });
  });
});
