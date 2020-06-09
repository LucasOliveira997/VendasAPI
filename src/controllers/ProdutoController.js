const Produto = require('../models/Produto');

module.exports = {

    async index(req, res) {
        const produto = await Produto.find();
        return res.json(produto);
      },


    async delete(req, res) {
        const { produto_id } = req.params;
        const produto = await produto.findByIdAndDelete(produto_id);
        return res.send(produto);
    },

    async update(req, res) {

        const { produto_id } = req.params;
        const { nome, descricao, preco } = req.body;

        const produto = await produto.findByIdAndUpdate(produto_id, {

            nome,
            descricao,
            preco

        }, { new: true });

        return res.json(produto)

    },

    async store(req, res){

        const { nome, descricao, preco } = req.body;

             produto = await Produto.create({
             nome,
             descricao,
             preco
            });

            return res.json(produto);
    }
};