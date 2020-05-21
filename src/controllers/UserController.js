const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { user_id } = req.params;
        const users = await user.find(user_id)

        users.senha = undefined;

        return res.json(users);

    },

    async show(req, res) {
        const { user_id } = req.params;
        const user = await user.findById(user_id);

        user.senha = undefined;

        return res.json(user);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const user = await user.findByIdAndDelete(user_id);
        return res.send(user);
    },

    async update(req, res) {

        const { user_id } = req.params;
        const { nome, celular, cpf, email, login, gestor, senha} = req.body;

        const user = await user.findByIdAndUpdate(user_id, {

            nome,
            celular,
            cpf,
            email,
            login,
            gestor,
            senha,

        }, { new: true });

        return res.json(user)

    },

    async store(req, res){

        const { nome, celular, cpf, email, login, gestor, senha } = req.body;


        let user = await User.findOne({ email });

        if (!user){
            user = await User.create({
                nome,
                celular,
                cpf,
                email,
                login,
                gestor,
                senha
            });
            return res.json(user);

        }     
        return res.json({ erro: 'Este e-mail já está em uso'});
    }
};