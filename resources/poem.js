/* global Models */

module.exports = function(app) {
    
    var restful = require('node-restful'),
        mongoose = restful.mongoose,
        authApi = require('../authapi.js');
    
    Models = Models || {};
    
    Models.Poem = app.poem = restful.model('poem', mongoose.Schema({
        title: String,
        publishDate: Date,
        published: Boolean,
        text: String,
        audioFile: String,
        _author: { type: mongoose.Schema.Types.ObjectId, ref: 'author' }
    }))
    .methods(['get', 'post', 'put', 'delete']);
    
    Models.Poem.before('post', authApi);
    Models.Poem.before('put', authApi);
    Models.Poem.before('delete', authApi);
 
    Models.Poem.register(app, '/poems');
    
}