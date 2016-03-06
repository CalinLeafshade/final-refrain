/* global Models */

module.exports = function(app) {
    
    var restful = require('node-restful'),
        mongoose = restful.mongoose,
        authApi = require('../authapi.js');
    
    Models = Models || {};
    
    Models.Author = app.author = restful.model('author', mongoose.Schema({
        name: String,
        birth: Date,
        death: Date,
        picture: String
    }))
    .methods(['get', 'post', 'put', 'delete']);
    
    Models.Author.before('post', authApi);
    Models.Author.before('put', authApi);
    Models.Author.before('delete', authApi);
 
    Models.Author.register(app, '/authors');
    
}