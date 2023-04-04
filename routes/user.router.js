/*const express=require('express');
const route=express.Router();
const userController=require('../controllers/user.controller');
const multer = require('multer');

//multer config
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,'./public')
    },//filename:(req,res,cb)=>{//pour ne pas enregistrer deux images de m nom afin de ne pas perdre une image
        filename: function (req, file, cb) {//on peut mettre arrow function 
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix)
          }   
    },
);
const upload = multer({ storage: storage }).single('photo')//passer la config :storage
                                       //image nom de fichier dans form name of field  a uploder
route.post('/upload',upload,(req, res)=>{
    const {file} = req;
    res.send({
        file:file.originalname,
        path:file.path,
    })
});
route.post('/signup', userController.signup);
route.post('/signin', userController.signin);
module.exports=route;*/
/*const express = require('express');
const route = express.Router();
const userController = require('../controllers/user.controller');
const multer = require('multer');

//multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage }).single('picture');

/*route.post('/upload', upload, (req, res) => {
    const { file } = req;
    res.send({
        file: file.originalname,
        path: file.path
    });
});*/ //fait pour experimenter upload with postman
/*
route.post('/signup', upload, userController.signup);
route.post('/signin', userController.signin);
route.post('/liste', userController.liste);

module.exports = route;
*/
const express = require('express');
const route = express.Router();
const userController = require('../controllers/user.controller');
const multer = require('multer');

// multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage }).single('picture');

route.post('/signup', upload, userController.signup);
route.post('/signin', userController.signin);
route.get('/liste', userController.liste);

module.exports = route;
