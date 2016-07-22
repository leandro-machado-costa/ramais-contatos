/*Define dependencies.*/

var express=require("express");
var jsonfile = require('jsonfile')
var bodyParser = require('body-parser');
var path = require('path');
var app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json() ); 
app.use(express.static(__dirname + '/public'));

app.get('/ramais', function(req, res) {
	res.sendFile(__dirname + req.route.path+"//index.html");
});


app.post('/salvar',function(req,res){
    if (!req.body) return res.sendStatus(400)
    jsonfile.writeFileSync(__dirname +'//public//ramais//contatos.json', req.body.lista)
    res.end();
});

app.get('/',function(req,res){
	res.sendFile(__dirname + req.route.path+"//index.html");
});



/*Run the server.*/
app.listen(80,function(){
    console.log("Working on port 3000");
});
