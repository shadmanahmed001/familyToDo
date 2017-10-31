var mongoose = require('mongoose');
var items = require('../controllers/item')
var path = require('path')

console.log('routes');
module.exports = function(app){
app.get('/items', function(request, response) {
  items.index(request, response);
});
app.get('/edit/:id', function(request, response) {
  items.show(request, response);
});
app.post('/items', function(request, response) {
  items.create(request, response);
});
app.put('/items/:id', function(request, response) {
  items.update(request, response);
});
app.delete('/items/:id', function(request, response) {
  items.delete(request, response);
});
}
