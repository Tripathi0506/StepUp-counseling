const mongoose =require('mongoose')
const schema=mongoose.Schema;
const userSchema= new schema({
    first_name: String,
    last_name: String,
    gender: String,
    email: String,
    phone: Number,
    branch: String,
    category: String,
    ssc_marks: Number,
    hsc_marks: Number,
    percentile: Number
})


module.exports=mongoose.model('User',userSchema);