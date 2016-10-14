var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = {
	show: function(req, res){
		Post.find({}).populate('comments').exec(function(err, posts){
			res.render('index', {posts: posts})
		})
	},
	create: function(req, res){
		var new_post = new Post({name: req.body.name, text: req.body.text});
	    new_post.save(function(err){
	        if(err){
	            console.log('something went wrong');
	        } else{
	            res.redirect('/');
	        }
	    })
	}
}