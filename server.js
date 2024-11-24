import express from 'express';
import routes from './src/routes/postsRoutes.js';




// Importa o framework Express para criar a aplicação web.
const app = express();
app.use(express.static("uploads"));
routes(app)



// Inicia o servidor na porta 3000 e mostra uma mensagem no console quando estiver pronto.
app.listen(3000, () => {
    console.log('Servidor escutando...');
});

