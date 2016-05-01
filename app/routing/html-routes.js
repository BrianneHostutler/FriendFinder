


app.get('/', function(req, res){
	
	//res.send("Welcome to the Star Wars Page!")
	res.sendFile(path.join(__dirname + '/survey.html'));
})