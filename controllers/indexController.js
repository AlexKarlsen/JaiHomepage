var post = require('../models/post');

    var Post = new post({
      'headLine' : "New headline",
      'subHeadLine' : "new sub header",
      'content' : "lores ipsum" 
    });

    /* GET 'home' page */
    module.exports.index = function(req, res){
        console.log(Post.headLine);
        res.render('index', { title: 'Express', post: Post });
    };