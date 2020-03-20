const mongosse = require("mongoose");

const airlineSchema = new mongosse.Schema({
    name:{type:String,required:true},
    age:{type:String,required:true},
    arr:{type:String,required:true},
    dep:{type:String,required:true}
})


module.exports  = mongosse.model("Airline",airlineSchema);