var express = require('express');
var router = express.Router();
const session = require('express-session');
var cookieParser = require('cookie-parser');
const store = new session.MemoryStore();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/project-list', checkUserSession,function(req, res, next) {

    var prof_id = req.session.userid;
    
    console.log(req.session.userid);

    var sql="SELECT * FROM project WHERE prof_id = '" + prof_id + "';";
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data)
    res.render('project-list-professor', { title: 'Project List', userData: data});
  });
});

function checkUserSession( req, res, next )
{
    console.log(req.session.userid);
    if( req.session.userid )
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
}
module.exports = router;