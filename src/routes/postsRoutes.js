import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage});
// linux ou no mac
// const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    // Habilita o Express a entender dados no formato JSON, que é comum para enviar e receber dados em APIs.
    app.use(express.json());
    // Define uma rota para responder a requisições GET para '/posts'.
    app.use(cors(corsOptions));
    app.get('/posts', listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost );
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;