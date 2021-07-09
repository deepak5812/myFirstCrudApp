const mongoose=require('mongoose');


const blogSchema=mongoose.Schema({
    tname:{
        type:String,
        require:true,
    },
    myblog:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    }
});

const UserInfo=mongoose.model('BLOGINFO',blogSchema);
module.exports=UserInfo;