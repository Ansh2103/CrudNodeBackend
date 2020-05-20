var  Note = require('../Models/note.model');
exports.createNote = (req,res)=>{
    if (!req.body.content) {
         return res.status(400).send({
             message : 'note content can not be empty'
         })
    }

const note = new Note({
    title : req.body.title,
    content : req.body.content

})
note.save()
.then(data =>{
    res.send(data);
})
.catch(err =>{
    res.status(500).send({
        message : err.message ||'something error occured'
    })
})
}