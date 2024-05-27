var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/');

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/'; // Altere para a sua URL de conexão e o nome do seu banco de dados

// Configuração da conexão com o MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Defina um objeto para armazenar a conexão do banco de dados
const db = mongoose.connection;

// Tratamento de erros de conexão
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));

// Tratamento de eventos de conexão bem-sucedida
db.once('open', function() {
  console.log('Conexão com o banco de dados MongoDB estabelecida com sucesso!');
});
