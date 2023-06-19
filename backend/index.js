import  express from 'express';
const port = 8000;
import db from "./config/mongoose.js"
import User from './models/user.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import router from './routes/index.js';
const app = express()




app.use(express.json());
app.use(express.urlencoded())








app.use(session({
    secret: 'docs share',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:1000 * 60 *60 * 24 },
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