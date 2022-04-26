module.exports = app => {
    const students = require("../controllers/student.js");
    const databaseConfig = require("../config/database_config.js");
    var router = require("express").Router();
  
    // add new student
    router.post("/", students.create);
  
    // view all students
    router.get("/", students.findAll);
  
    // view a student
    router.get("/:id", students.findOne);
  
    // update student
    router.put("/:id", students.update);
  
    // remove a student with id
    router.delete("/:id", students.delete);
  
    app.use('/api/students', router);
  };
  require("./config/databse_config.js")(app);

