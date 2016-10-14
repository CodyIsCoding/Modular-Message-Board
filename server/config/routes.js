var mongoose = require('mongoose');
var Post = require('../controllers/posts.js');
var Comment = require('../controllers/comments.js');

module.exports = function(app){
	app.get('/', function(req, res) {
		Post.show(req, res)
	});
	app.post('/new/post', function(req, res){
	    Post.create(req, res)
	})
	app.post('/new/comment/:id', function(req, res){
		Comment.create(req, res)
	});
}