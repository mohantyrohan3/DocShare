import express from "express";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, doc, getDocs, getFirestore, query, where, documentId, setDoc, updateDoc, deleteDoc } from "firebase/firestore";

import multer from "multer";
import config from "../config/firebase.config.js";
import Item from '../models/file.js';


const router = express.Router();


//Initialize a firebase application
initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single(), async (req, res) => {
    try {
        const dateTime = giveCurrentDateTime();

        const storageRef = ref(storage, `files/${req.file.originalname + "       " + dateTime}`);

        // Create file metadata including the content type
        const metadata = {
            contentType: req.file.mimetype,
        };

        // Upload the file in the bucket storage
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        const downloadURL = await getDownloadURL(snapshot.ref);
        const {name} =req.body;
        const items = await Item.create({name});
        await items.save();

        console.log('File successfully uploaded.');
        return res.send({
            message: 'file uploaded to firebase storage',
            name: req.file.originalname,
            type: req.file.mimetype,
            downloadURL: downloadURL
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
});

// returns all the  files
router.get('/items', async (req , res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(400).send(err.message);
    }
})


router.get('/:id', async (req, res) => {
    try {
        const employeeId = req.params.id

        const q = query(employeesRef, where(documentId(), "==", employeeId));
        // const q = query(employeesRef, where("isPermanent", "==", true));

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return res.send(`Employee with id ${employeeId} does not exists.`)
        }
        const employeeRecord = querySnapshot.docs[0].data();
        res.send({
            'Employee record': employeeRecord
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// edit file 
router.put('/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const UpdatedEmployee = pick(req.body, ['name', 'age', 'position', 'isPermanent']);
        const q = query(employeesRef, where(documentId(), "==", employeeId));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return res.send(`Employee with id ${employeeId} does not exists.`)
        }
        //updateDoc can update single or multiple fields
        await updateDoc(doc(db, "employee", employeeId), UpdatedEmployee);
        res.send('Employee record edited.')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// Delete file  
router.delete('/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const querySnapshot = await getDocs(query(employeesRef, where(documentId(), "==", employeeId)));
        if (querySnapshot.empty) {
            return res.send(`Employee with id ${employeeId} does not exists.`)
        }
        //deleteDoc delete a document if exists
        await deleteDoc(doc(db, "employee", employeeId));
        res.send('Employee records Deleted.')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

export default router;