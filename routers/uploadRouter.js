const express = require('express');
const multer = require('multer')
const path = require('path')
const router = express.Router();

const uploadController = require('../controllers/uploadController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../upload'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({storage,
    fileFilter: (req, file, cb) => {
        if(file.mimetype === 'txt') {
            cb(null,true);
        }
        else {
            cb(null,false);
        }      
    }
})

router
    .route('/')
    .post(upload.any(), uploadController.upload)

module.exports = router;