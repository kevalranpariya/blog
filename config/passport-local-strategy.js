const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const blogAdmin = require('../model/blog_admin');

passport.use(new passportLocal({
    usernameField: 'email'
}, (email, password, done) => {
    blogAdmin.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('Something Wrong')
            return done(null, err)
        }
        return done(null, user);
    })
}));

passport.serializeUser((user,done)=>{
    return done(null, user.id)
});

passport.deserializeUser((id,done)=>{
    blogAdmin.findById(id,(err,user)=>{
        if(err)
        {
            console.log('Something Wrong')
            return done(null,err);
        }
        return done(null,user);
    })
})

module.exports = passport;

