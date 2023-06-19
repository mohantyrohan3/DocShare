import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim:true,
        maxlength:[20, "Name cannot exceed 20 characters"]
    },
    downloadurl:{
        type: String,
        required: [true, "Please provide a download url"],
        trim:true,
        maxlength:[200, "Download url cannot exceed 200 characters"]
    }
    
});
const Item = mongoose.model('Item', itemSchema);
export default Item;