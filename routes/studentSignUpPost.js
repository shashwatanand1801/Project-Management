var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.post('/studentSignUp', function(req, res, next) {
  // console.log("hi");
  // console.log(req.body);
    var sid = req.body.sid
    var fname = req.body.fname
    var lname = req.body.lname
    var branch = req.body.branch
    var cgpa = req.body.cgpa
    var password=req.body.password

    var email = "hello@fsjk.sd"
    // console.log("Hi")
    // console.log(req.body)

    var sql="insert into student VALUES ('" + sid + "','" + branch + "','" + fname + "','" + lname +"', '" + cgpa + "','" + email + "', MD5('"+password+"'));";
    // console.log("Hi")
    // console.log(sql)
    // console.log(password);
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(req.body)
    console.log("Valued Entered")
  });
  return res.redirect('/student/project-list');
});
module.exports = router;