console.log('items controller');
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
  index: function(request,response){
    Item.find({}, function(err, data){
      if (err){
        console.log('there was a problem here');
      }
      else{
        response.json(data)
      }
    })},
  create: function(request,response){
    console.log('got to the create function in server', request.body);
    var newitem = new Item(request.body);
    console.log(newitem);
    newitem.save(function(err){
      if (err){
        console.log('error in creation');
        response.json(err);
      }
      else{
        console.log('created');
        Item.find({}, function(err, data){
          if (err){
            console.log('there was a problem here');
          }
          else{
            console.log('your sending all the items json');
            response.json(data);
          }
        })
      }
    })
  },
  update: function(request,response){
      Item.update({_id: request.params.id},request.body, function(err) {
        if(err){
          console.log('Updating didnt work');
        }
        else{
          console.log('you updated');
          Item.findOne({_id: request.params.id}, function(err, item) {
            if (err){
              console.log('the show had an error');
              response.json(err);
            }
            else{
              response.json(item)
            }
      })  }
    })
  },

  delete: function(request,response){
    Item.remove({_id: request.params.id}, function(err){
      if(err){
        console.log('delete had an err');
        response.json(err)
      }
      else{
        console.log('The delete worked');
        response.json({placeholder:'deleted'});
      }
    })
  },
  show: function(request,response){
    Item.findOne({_id: request.params.id}, function(err, item) {
      if (err){
        console.log('the show had an error');
        response.json(err);
      }
      else{
        response.json(item)
      }
})  }
}
