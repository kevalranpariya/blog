const blogDB = require('../model/blog_tb');
const { all } = require('../route');
const blogAdmin = require('../model/blog_admin')

module.exports.blogHome = (req,res)=>{
    blogDB.find({}, (err, data) => {
        if (err) {
            console.log('Can not find blog');
            return false
        }
        return res.render('show_blog', {
            data: data
        });
    });
}

module.exports.add_blog = (req, res) => {
    return res.render('add_blog')
}

module.exports.blog_insert = (req, res) => {
    blogDB.uploadImg(req, res, (err) => {
        if (err) {
            console.log('Data not inserted');
            return false
        }
        if (req.file) {
            var ImgPath = blogDB.Imgpath + '/' + req.file.filename;
            blogDB.create({
                title: req.body.title,
                category: req.body.category,
                person_name: req.body.person,
                date: req.body.date,
                description: req.body.desc,
                thumbnail: ImgPath
            }, (err, data) => {
                if (err) {
                    console.log('Something Wrong.. Please try again')
                    return false;
                }
                return res.redirect('/add-blog');
            })
        }
    })
}



module.exports.read_more = (req, res) => {
    blogDB.findById(req.params.id, (err, data) => {
        if (err) {
            console.log('can not find blog data')
            return false;
        }
        else if (data) {
            var allRec = blogDB.find({},(err,allRec)=>{
                if(err)
                {
                    console.log('Something Wrong')
                    return false
                }
                return res.render('single_blog',{
                    data : data,
                    allRec : allRec
                })
            })
            
        }

    });
}

module.exports.registration = (req,res)=>{
    return res.render('loginRegister')
}

module.exports.register = (req,res)=>{
    blogAdmin.create(req.body,(err,data)=>{
        if(err)
        {
            console.log('SOmething Wrong')
            return false;
        }
        return res.redirect('back');
    })
}

module.exports.login = (req,res)=>{
    // blogAdmin.findOne({email : req.body.email}, (err,data)=>{
    //     if(err)
    //     {
    //         console.log('Something Wrong')
    //         return false
    //     }
    //     return res.redirect('/');
    // })
    return res.redirect('/add-blog');
}