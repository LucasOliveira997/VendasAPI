const User = require('../models/User');
const Cliente = require('../models/Cliente');
const Venda = require('../models/Venda');


module.exports = {

    async index(req, res) {
        const venda = await Venda.find();
        return res.json(venda);
      },

    async show( req, res ){
        const { user_id } = req.headers;

        const vendas = await Venda.find({ user: user_id });

        return res.json(vendas);
    },

    async delete(req, res) {
        const { venda_id } = req.params;
        const venda = await Venda.findByIdAndDelete(venda_id);
        return res.send(venda);
    },

    


    async store(req, res) {
        const{ valor, formaPagamento, createdAt, tamanho, quantidade, produto, user, cliente } = req.body;
          
        
        let userCpf = await User.findOne({ cpf: user });
        let clienteCpf = await Cliente.findOne({ cpf: cliente });

        if(userCpf && clienteCpf){
        
        venda = await Venda.create({
            user,
            cliente,
            valor,
            formaPagamento,
            createdAt,
            tamanho,
            quantidade,
            produto: produto.split(',').map(produto => produto.trim()),
        })
        return res.json(venda);
    }
    if(!userCpf){
        return res.status(400).send({ erro: 'Vendedor não encontrado'});
    }
    if(!clienteCpf){
        return res.status(401).send({ erro: 'Cliente não encontrado'});
    }
        
    }
};