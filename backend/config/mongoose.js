import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/doc_share_db',{
    family: 4 // Uses Ipv4
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error Connecting to Db'));

db.once('open',function(){
    console.log('Successfully Connected To database');
});


export default db;