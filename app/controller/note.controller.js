const noteServices = require('../services/note.services');
exports.note_create = function(req,res){
    try {

        req.assert('title','title must be atkeast three characters').len(3);
        req.assert('content','content should not be empty').notEmpty();
        var errors = req.validationErrors();
        if (errors) {
            return res.status(400).send(errors)
            
        }
        else{
            noteServices.createNote(req,res);
        }
        
    } catch (error) {
        res.send(error);
    }
}