const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const mongoURI = 'mongodb://localhost:27017/'; 

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
