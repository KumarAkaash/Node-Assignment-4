const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({
      status: "error",
      message: "Invalid data types",
    });
  }

  if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
    return res.status(400).json({
      status: "error",
      message: "Underflow",
    });
  }

  if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
    return res.status(400).json({
      status: "error",
      message: "Overflow",
    });
  }

  return res.json({
    status: "success",
    message: "the sum of given two numbers",
    sum: num1 + num2,
  });
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({
      status: "error",
      message: "Invalid data types",
    });
  }

  if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
    return res.status(400).json({
      status: "error",
      message: "Underflow",
    });
  }

  if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
    return res.status(400).json({
      status: "error",
      message: "Overflow",
    });
  }

  return res.json({
    status: "success",
    message: "the difference of given two numbers",
    difference: num1 - num2,
  });
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res.status(400).json({
      status: "error",
      message: "Invalid data types",
    });
  }

  if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
    return res.status(400).json({
      status: "error",
      message: "Underflow",
    });
  }})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;