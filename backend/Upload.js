var mongoose=require('mongoose');

const Schema=mongoose.Schema;

let Upload=new Schema({
    filename:{
        type:String
    }
});


module.exports = mongoose.model('Upload', Upload);