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
        lowercase: true,
        unique: true,
    },
    celular:{
        Type: String,
        
    },
    endereco:{
        Type: String,
        
    },

});

module.exports = mongoose.model('Cliente', ClienteSchema);