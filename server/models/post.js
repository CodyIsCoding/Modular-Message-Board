var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 4},
	text: { type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });

var Post = mongoose.model('Post', postSchema);