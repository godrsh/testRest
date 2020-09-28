var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var users = [
	{ id: 1, name: 'kangjunsu' },
	{ id: 2, name: 'limchayung' },
	{ id: 3, name: 'ohtaesik' },
  ]

/*기본페이지 route*/
app.get('/', function(req,res){
	res.send('Server running at http://localhost:3000');
});

/*CRUD : Create(post)*/
app.post('/user', function(req,res){
	// create 쿼리 수행 후 결과값 전달.		
	const user = {
		id: users.length + 1,
		name: req.body.name
	}	
	users.push(user);	

	result = users.find(u => u.id === parseInt(users.length));
	res.send('Rest Api call [ CRUD Create(post) ] create id : '+ result.id + ' / create : name' + result.name);
});


/*CRUD : Read(get)*/
app.get('/user/:id', function(req,res){
	// select 쿼리 수행 후 결과값 전달.	
	user = users.find(u => u.id === parseInt(req.params.id));	
  	if (!user) { 
		  return res.status(404).send('ID was not found.'); 
	}
  	res.send('Rest Api call [ CRUD Read(get) ] params : ' + user.name);
});


/*CRUD : Update(put)*/
app.put('/user/:id', function(req,res){
	// update 쿼리 수행 후 결과값 전달.	
	const user = users.find(u => u.id === parseInt(req.params.id));
  	if (!user) { 
		  return res.status(404).send('ID was not found.'); 
	}
  	user.name = req.body.name; // users 값도 바뀌네? 왜죠...	  
	res.send('Rest Api call [ CRUD Update(put) ] update id : ' + user.id + ' / update name ' + user.name);
});

/*CRUD : Delete()*/
app.delete('/user/:id', function(req,res){
	// delete 쿼리 수행 후 결과값 전달.
	const user = users.find(u => u.id === parseInt(req.params.id));
	if (!user) { return res.status(404).send('ID was not found.'); }
  
	const index = users.indexOf(user);
	users.splice(index, 1);

	res.send('Rest Api call [ CRUD Delete(delete) ] params ' + users.name);
});

app.listen(3000);
console.log('Server running at http://localhost:3000');