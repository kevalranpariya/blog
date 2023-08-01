const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const imgPath = '/uploads/img'

const blogSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    person_name :{
        type : String,
        required : true
    },
    date : {
        type : Date,
        required :true
    },
    description :{
        type : String,
        required : true
    },
    thumbnail : {
        type : String,
        required : true
    }
});


const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, path.join(__dirname,'..', imgPath));
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + '-'+ Date.now());
    }
})

blogSchema.statics.uploadImg = multer({storage : storage}).single('thumbnail');
blogSchema.statics.Imgpath = imgPath;

const blogModel = mongoose.model('Blog_Data', blogSchema);

module.exports = blogModel;