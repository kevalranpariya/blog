const { urlencoded } = require('express');
const express = require('express');
const db = require('./config/mongoose');
const path = require('path');


const port = 4555;
const server = express();

server.set('view engine', 'ejs');
server.use(urlencoded());
server.use(express.static('asstes'));
server.use('/uploads', express.static(__dirname+'/uploads'));


const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const session = require('express-session');
const { Cookie } = require('express-session');
const { initialize } = require('passport');

server.use(session({
    name : 'Blog',
    secret : 'RnW',
    saveUninitialized : false,
    resave : true,
    cookie : {
        maxAge : 1000*100*60
    }
}));

server.use(passport.initialize())
server.use(passport.session())

server.use('/', require('./route/index'));

server.listen(port, (err)=>{
    if(err)
    {
        console.log('Server Is not responding');
        return false;
    }
    console.log('Server Is Responding');
})