import express from "express"
const router = express.Router()
import File from "../models/file.js";
import app from "../config/firebase.js";
import multer from "multer";
import { getStorage, ref, getDownloadURL, uploadBytesResumable , deleteObject } from "firebase/storage";


const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/',(req,res)=>{
    res.send({
        msg:"Inside File Api"
})
})



// File Upload Route
router.post("/upload", upload.single(), async (req, res) => {

    if(req.isAuthenticated()){
        try {
            const storageRef = ref(storage, `files/${req.user.id}/${req.body.filename}`);
            const metadata = {
                contentType: req.file.mimetype,
            };
            const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
            const downloadURL = await getDownloadURL(snapshot.ref);
    
            console.log('File successfully uploaded.');
            const newUser = new File({
                filename:req.body.filename,
                url:downloadURL,
                filetype:req.file.mimetype,
                user_id:req.user.id,
                size:req.file.size,
                ref:storageRef
            });
        
            newUser.save()
    
            return res.send({
                message: 'file uploaded to firebase storage',
                file:newUser
            })
        } catch (error) {
            return res.send({
                err:error
            })
        }
    }
    else{
        res.send({
            msg:'You are Not Autherized to upload file'
        })
    }


    
});





















export default router