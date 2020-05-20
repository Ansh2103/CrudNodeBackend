const mangoose = require('mongoose');
const noteSchema = mangoose.Schema({
    title : String,
    content : String
},
{
    timeStamp : true
})
module.exports = mangoose.model('Note',noteSchema);