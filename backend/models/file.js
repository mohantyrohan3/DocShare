import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    filetype:{
        type:String,
        required:true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    size :{
        type:Number,
        required:true
    },
    ref:{
        type:String,
        required:true
    }
});


const File = mongoose.model('File',fileSchema);

export default File;