const express = require ('express');
const path = require('path');

const server = express();


server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use('/public', express.static(path.join(__dirname, 'public')));

const {items} = require('./public/items');

server.get('/products', (req,res) => {
   res.render('products', {items});
});


 
const itemsList = require('./public/items');

server.get('/items', async (req, res) => {

   await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
   });

   res.send(JSON.stringify(itemsList));
});


server.get('/items/:id',  (req,res) => {
   console.log(req.params);
   
   res.send('product-id');
});


server.listen(3000);