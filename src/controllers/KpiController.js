const Venda = require('../models/Venda');

module.exports = {
async index(req, res) {

    const marilene = await Venda.find({ produto: "Marilene" });
    const negoney = await Venda.find({ produto: "Nego Ney" });
    const faustao = await Venda.find({ produto: "Faustão" });
    const irineu = await Venda.find({ produto: "Irineu" });


    return res.json({ "Marilene": marilene.length, "Nego Ney": negoney.length, "Faustão": faustao.length, "Irineu": irineu.length });

    },
};