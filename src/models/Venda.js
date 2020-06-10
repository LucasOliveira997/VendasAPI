const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
    valor:{
        type: String,
    },
    formaPagamento:{
        type: Number,
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
    produto: [String],
    
    user: {
        type: String,
        
    },
    cliente: {
        type: String,
        
    },
    
});


module.exports = mongoose.model('Venda', VendaSchema);