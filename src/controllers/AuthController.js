const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res) {
        const { login, senha } = req.body;

        const user = await User.findOne({ login }).select('+senha');
        if (!user)
            return res.status(400).send({ error: 'Login e/ou senha inválido(s)' });

        if (!await bcrypt.compare(senha, user.senha))
            return res.status(400).send({ error: 'Login e/ou senha inválido(s)' });


        user.password = undefined;

        

        return res.send({ user });
    }
};