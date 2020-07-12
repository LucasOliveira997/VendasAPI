const Cliente = require('../models/Cliente');

module.exports = {


    async index(req, res) {
        const { cpf } = req.query;

        const cliente = await Cliente.find({ cpf : cpf });

        
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


        let clienteCpf = await Cliente.findOne({ cpf });
        let clienteEmail = await Cliente.findOne({ email });

        if (!clienteCpf && !clienteEmail){
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
        if (clienteCpf){
            return res.status(400).send({ erro: 'Este cpf já está cadastrado'});
        } 
        
        if (clienteEmail){
            return res.status(401).send({ erro: 'Este e-mail já está cadastrado'});
        }
    }
};