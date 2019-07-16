const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const path = require('path');
const bodyParser=require('body-parser');
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const methodOverride = require('method-override');
const Upload = require('./Upload');
const app=express();

app.use(cors());

app.use(bodyParser.json());
app.use(methodOverride('_method'));
const router=express.Router();

const mongoURI ="mongodb://localhost:27017/mongouploads";

const conn=mongoose.createConnection(mongoURI);
let gfs;
conn.once('open',()=>{
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
          console.log(fileInfo);
        });
      });
    }
  });
const image = multer({ storage });

app.get('/images', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
       // res.json('index', { files: false });
      } else {
        files.map(file => {
          if (
            file.contentType === 'image/jpeg' ||
            file.contentType === 'image/png'
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
        });
       // res.json('index', { files: files });
       res.json({files:files});
       //console.log(files);
      }
    });
  });
  app.get('/images', (req, res) => {
   
  });
 
  app.post('/images', image.single('file'), (req, res) => {
    res.json({ file: req.file });
  //  console.log(req.file);
  });
  
app.listen(3000,()=>{
console.log("Listen on port 3000!!!");
});

app.use('',router);