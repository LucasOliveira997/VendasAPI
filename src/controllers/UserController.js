const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const user = await User.find();
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


        let userEmail = await User.findOne({ email });
        let userCpf = await User.findOne({ cpf });
        let userLogin = await User.findOne({ login });

        if (!userEmail && !userCpf && userLogin){
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
        if (userCpf){
            return res.status(400).send({ erro: 'Este cpf já está cadastrado'});
        } 
        
        if (userEmail){
            return res.status(401).send({ erro: 'Este e-mail já está cadastrado'});
        }
        
        if (userLogin){
            return res.status(402).send({ erro: 'Este login já está em uso'});
        }
    }
};