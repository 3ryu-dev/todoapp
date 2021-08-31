
const  Mongoose = require ("mongoose");
let Schema =Mongoose.Schema
const todoSchema = new Schema({
    todo:String,
    action:String,
    completed:{type:Boolean,
               default: false}
});

module.exports = Mongoose.model("todos",todoSchema);


