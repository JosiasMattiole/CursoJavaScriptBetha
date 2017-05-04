var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

database('mongodb://localhost/sistema');

http.createServer(app)
    .listen(9090, function(){
        console.log('Servidor iniciado com sucesso! Porta: 9090');
    });