const mongoose= require('mongoose');
const postSchema=new mongoose.Schema({
    name:String,
    description:string,
    media:[],
    creator:{
        type:mongoose.Types.ObjectId,//objectid:cle etrangere
        ref:'userS',// objectid cle de la table users
        required:true,//obligatoire

    }
})

module.exports=mongoose.model('post',postSchema);