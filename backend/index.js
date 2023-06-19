import  express from 'express';
const port = 8001;
import db from "./config/mongoose.js"
import User from './models/user.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import router from './routes/index.js';
const app = express()
import cors from "cors"
import path from "path"


app.use(express.json());
app.use(express.urlencoded())


const whitelist = ['http://localhost:3000', 'https://docshare.rohankm.online']
const corsOptions = {
  origin:whitelist,
  credentials:true
}
app.use(cors(corsOptions));




app.set('trust proxy', 1)
app.use(session({
    secret: 'docs share',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:1000 * 60 *60 * 24,  sameSite:'none',secure:true },
    store: MongoStore.create({ mongoUrl: 'mongodb://0.0.0.0:27017/doc_share_db',collectionName:"sessions" })
  }))

app.use(passport.initialize())
app.use(passport.session())





// routes
app.use('/api',router)



app.listen(port, (err) => {

    if(err){
        console.log('Error while starting the server ',err)
    }
    console.log(`Server started on port ${port}`)
});