var mongoose = require('mongoose');
var StudentsModal = mongoose.Schema({
    name:String,
    geboortedatum :String,
    studierichting:String
});
module.exports = mongoose.model('student',StudentsModal);