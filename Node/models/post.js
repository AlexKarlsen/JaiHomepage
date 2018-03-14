var mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    headLine : String,
    subHeadLine : String,
    content : String,
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Post', postSchema);