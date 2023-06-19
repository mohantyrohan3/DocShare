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
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import details from './config/constants.js';


const __dirname = path.dirname(__filename);



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
    store: MongoStore.create({ mongoUrl: `mongodb+srv://mohantyrohan3:${details.MONGO_PASSWORD}@docshare.0ulzzft.mongodb.net/doc_share_db?retryWrites=true&w=majority`,collectionName:"sessions" })
  }))



app.use(passport.initialize())
app.use(passport.session())





// routes
app.use('/api',router);



const rootPath = __dirname.substring(0, __dirname.length - 8);
app.use(express.static(rootPath + '/frontend/build'));
app.get('*', (req, res) => {
  res.sendFile(rootPath + '/frontend/build/index.html');
});



app.listen(port, (err) => {

    if(err){
        console.log('Error while starting the server ',err)
    }
    console.log(`Server started on port ${port}`)
});