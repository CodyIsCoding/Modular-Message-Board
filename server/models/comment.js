var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	name: { type: String, required: true, minlength: 4},
	text: { type: String, required: true}
}, { timestamps: true });

var Comment = mongoose.model('Comment', commentSchema);