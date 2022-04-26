
const cors = require("cors");
const express = require("express");
const mysql = require("mysql2");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Student Management Database" });
// });

//create tgeh connection to database
const connection =mysql.connect.connection({
    host: "localhost",
    user: "root",
    database: student_management
})


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});