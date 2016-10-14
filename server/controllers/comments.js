var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');

module.exports = {
	create: function(req, res){
		var comment_data = ({name: req.body.name, text: req.body.text, _post: req.params.id});
		var new_comment = new Comment(comment_data);
		Post.findOne({_id: req.params.id}, function(err, post){
			post.comments.push(new_comment);
			post.save(function(err){
				new_comment.save(function(err, comment_res){
			        if(err){
			            console.log('something went wrong');
			        } else{
			            res.redirect('/');
			        }
			    });
			});
		});
	}
}