const express = require('express');
const blogController = require('../controller/blogController')

const route = express.Router();

route.get('/', blogController.blogHome);

route.get('/add-blog', blogController.add_blog);
route.post('/blog-insert', blogController.blog_insert);
route.get('/show-blog/:id', blogController.read_more);

route.get('/registration', blogController.registration);

route.post('/register', blogController.register);
route.post('/login', blogController.login)

module.exports = route;