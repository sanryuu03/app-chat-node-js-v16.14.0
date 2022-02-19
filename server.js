let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    //kalo ada message baru
    socket.on('newMessage', function(msg) {
        io.emit('newMessage', msg);
        console.log('Chat Baru: ' + msg);
    });
    
    //kalo ada user disconnect
    socket.on('disconnect', function(msg) {
        console.log('user disconnected');
    });
})

http.listen(3000, function() {
    console.log('localhost:3000');
});