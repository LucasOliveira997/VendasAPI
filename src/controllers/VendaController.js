const User = require('../models/User');
const Cliente = require('../models/Cliente');
const Venda = require('../models/Venda');

module.exports = {

    async index(req, res) {
        const { venda_id } = req.params;
        const vendas = await venda.find(venda_id);

        return res.json(vendas);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const venda = await Venda.findByIdAndDelete(user_id);
        return res.send(venda);
    },

    async update(req, res) {

        const { user_id } = req.params;
        const { valor, formaPagamento, createdAt} = req.body;

        const venda = await Venda.findByIdAndUpdate(user_id, {

            valor,
            formaPagamento,
            createdAt,
            

        }, { new: true });

        return res.json(venda)

    },


    async store(req, res) {
        const{ valor, formaPagamento, createdAt } = req.body;
        const { user_id } = req.headers;
        const { cliente_id } = req.headers;
           

        const user = await User.findById(user_id);
        const cliente = await Cliente.findById(cliente_id);
    
        if(!user){
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }
        if(!cliente){
            return res.status(400).json({ error: 'Cliente não encontrado' })
        }

        const venda = await Venda.create({
            user: user_id,
            cliente: cliente_id,
            valor,
            formaPagamento,
            createdAt,
        })

        return res.json(venda)
    }
};