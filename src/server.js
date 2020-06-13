const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user:user@projetos-q0qc0.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET (listar) - POST(criar) - PUT(alterar) - DELETE

app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333);