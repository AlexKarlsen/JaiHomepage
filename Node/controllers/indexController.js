var post = require('../models/post');

    // Test data to create news module
    var Posts = new Array(
    new post ({
        'headLine' : "New headline",
        'subHeadLine' : "new sub header",
        'content' : "lores ipsum" 
    }),
    new post({
        'headLine' : "New 1 headline",
        'subHeadLine' : "new sub header",
        'content' : "lores 1 ipsum" 
    }),
    new post(
    {
        'headLine' : "New headline",
        'subHeadLine' : "new sub header",
        'content' : "lores ipsum" 
    }),
    new post(
    {
        'headLine' : "New headline",
        'subHeadLine' : "new sub header",
        'content' : "lores ipsum" 
    }));

    /* GET 'home' page */
    module.exports.index = function(req, res){
        res.render('index', { title: 'Express', posts: Posts });
    };