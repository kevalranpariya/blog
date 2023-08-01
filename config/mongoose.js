const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Blog_site');

const db = mongoose.connection;

db.on('error', console.error.bind('error',console));

db.once('open',(err)=>{
    if(err)
    {
        console.log('Database is not connected')
        return false
    }
    console.log('Database is connected');
})