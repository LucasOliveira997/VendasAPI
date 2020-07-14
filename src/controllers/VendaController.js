const User = require('../models/User');
const Cliente = require('../models/Cliente');
const Venda = require('../models/Venda');


module.exports = {

    async index(req, res) {

        const marilene = await Venda.find({ produto: "Marilene" });
        const negoney = await Venda.find({ produto: "Nego Ney" });
        const faustao = await Venda.find({ produto: "Faustão" });
        const irineu = await Venda.find({ produto: "Irineu" });

        return res.json({ "Marilene": marilene.length, "Nego Ney": negoney.length, "Faustão": faustao.length, "Irineu": irineu.length });

    },

    async delete(req, res) {
        const { venda_id } = req.params;
        const venda = await Venda.findByIdAndDelete(venda_id);
        return res.send(venda);
    },




    async store(req, res) {
        const { valor, formaPagamento, createdAt, tamanho, quantidade, produto, user, cliente } = req.body;


        let userCpf = await User.findOne({ cpf: user });
        let clienteCpf = await Cliente.findOne({ cpf: cliente });

        if (userCpf && clienteCpf) {

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
        if (!userCpf) {
            return res.status(400).send({ erro: 'Vendedor não encontrado' });
        }
        if (!clienteCpf) {
            return res.status(401).send({ erro: 'Cliente não encontrado' });
        }

    }
};