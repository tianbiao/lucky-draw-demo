var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {

	req.on('data', function(data){
		var record = JSON.parse(data.toString());
		console.log('data: ', record);
		io.emit('chat message', "姓名:" + record.entry.field_1 + "电话:" + record.entry.field_2);
	})

	res.send('ok');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});