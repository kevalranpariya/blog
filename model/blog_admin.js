const mongoose = require('mongoose');

const blogAdminSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});


const blogAdmin = mongoose.model('Blog_Admin', blogAdminSchema);

module.exports = blogAdmin;