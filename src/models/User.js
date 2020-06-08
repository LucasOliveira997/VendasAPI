const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    celular:{
        type: String,
        
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
        lowercase: true,
    },
    login: {
        type: String,
        required: true,
        unique: true,
    },
    gestor: Number,
    
    senha: {
        type: String,
        required: true,
        select: false,
    },
});
    
    UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash; 

    next();
});


module.exports = mongoose.model('User', UserSchema);