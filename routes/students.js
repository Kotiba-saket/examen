var express = require('express');
var router = express.Router();
var student = require('../modal/studentsModal');

router.get('/',(req,res) => {
    var mysort = { name: 1 };
  student.find({}, (err,result) => {
    if(err) {
      res.status(500).json(err);
    } else {
      
  
      res.render('list.ejs',{students: result})
    }
  }).sort(mysort);
})

router.get('/add', function(req, res, next) {
  res.render('add.ejs',{});
});

router.post('/add' , (req,res) => {
  var newStudent = new student({
    
    name: req.body.name,
    geboortedatum: req.body.geboortedatum,
    studierichting: req.body.studierichting
  });
   
  newStudent.save((err,result) => {
    if(err) {
      res.status(500).json(err);
    } else {
      // res.status(200).json(result);
      res.redirect('./')
    }
  })
})

module.exports = router;
