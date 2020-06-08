const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome:{
        type: String,
    },
    descricao:{
        type: String,
    },
    preco:{
        type: String,
    },
});


module.exports = mongoose.model('Produto', ProdutoSchema);