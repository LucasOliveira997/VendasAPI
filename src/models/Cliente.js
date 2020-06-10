const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema ({
    nome:{
        type: String,
        required: true,
    },
    dataNascimento:{
        type: Date,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    celular:{
        type: String,
        
    },
    endereco:{
        type: String,
        
    },

});

module.exports = mongoose.model('Cliente', ClienteSchema);