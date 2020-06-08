const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
    valor:{
        type: String,
    },
    formaPagamento:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    tamanho:{
        type: Number,
    },
    quantidade:{
        type: Number,
    },
    //fkeys
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
    },
});


module.exports = mongoose.model('Venda', VendaSchema);