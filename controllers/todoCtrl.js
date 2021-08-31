
const todos = require('../models/todos')

                                  
exports.getTodo =(req,res) => {
    
    todos.find({}, (err, tasks) =>{
        if(err){console.error(err)} 
        res.send(tasks)})
                                }


exports.saveTodo =async (req,res)=>{const newTask = new todos({
    todo:req.body.todo,
    action:req.body.action,
    completed:false
})

try{ await newTask.save();}
catch(err) {res.status(500).json({message: err})}
res.json({status:'Uploaded!',data: newTask});

}

exports.deleteTodo= async (req,res)=> {
    const targetId = req.params._id
    console.log(req.params)
    try{await todos.deleteOne({_id:targetId})}
    catch(e){console.error(e)}
    res.send({status:'Its gone!!'})
}
