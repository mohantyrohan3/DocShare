import mongoose from "mongoose";
import details from "./constants.js";

mongoose.connect(`mongodb+srv://mohantyrohan3:${details.MONGO_PASSWORD}@docshare.0ulzzft.mongodb.net/doc_share_db?retryWrites=true&w=majority`,{
    family: 4 // Uses Ipv4
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error Connecting to Db'));

db.once('open',function(){
    console.log('Successfully Connected To database');
});


export default db;