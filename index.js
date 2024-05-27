const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Configuração da conexão com o MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/aula', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

const userRoute = require('./src/Routes/UserRoute');

const PORT = 3000; // Altere a porta conforme necessário

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);

app.get('/', function(req, res) {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
