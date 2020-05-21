const Cliente = require('../models/Cliente');

module.exports = {

    async index(req, res) {
        const { cliente_id } = req.params;
        const clientes = await cliente.find(cliente_id)

        return res.json(clientes);

    },

    async show(req, res) {
        const { cliente_id } = req.params;
        const cliente = await cliente.findById(cliente_id);

        return res.json(cliente);
    },

    async delete(req, res) {
        const { cliente_id } = req.params;
        const cliente = await cliente.findByIdAndDelete(cliente_id);
        return res.send(cliente);
    },

    async update(req, res) {

        const { cliente_id } = req.params;
        const { nome, dataNascimento, cpf, email, celular, endereco } = req.body;

        const cliente = await cliente.findByIdAndUpdate(cliente_id, {

            nome,
            dataNascimento,
            cpf,
            email,
            celular,
            endereco

        }, { new: true });

        return res.json(cliente)

    },

    async store(req, res){

        const { nome, dataNascimento, cpf, email, celular, endereco } = req.body;


        let cliente = await Cliente.findOne({ email });

        if (!cliente){
             cliente = await Cliente.create({
             nome,
             dataNascimento,
             cpf,
             email,
             celular,
             endereco
            });
            return res.json(cliente);

        }     
        return res.json({ erro: 'Este e-mail já está cadastrado'});
    }
};