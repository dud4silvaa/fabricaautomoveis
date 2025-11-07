// src/controllers/alocacao.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const alocacoes = await prisma.alocacao.findMany({
      include: {
        possui: { select: { modelo: true, preco: true } },
        contem: { select: { concessionaria: true } }
      }
    });
    res.json(alocacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alocações' });
  }
};

// 🆕 NOVO: criar uma alocação
const create = async (req, res) => {
  try {
    const { area, quantidade, automovel, concessionaria } = req.body;

    // validação simples
    if (!area || !automovel || !concessionaria || !quantidade) {
      return res.status(400).json({ error: 'Dados incompletos.' });
    }

    const nova = await prisma.alocacao.create({
      data: {
        area: parseInt(area),
        quantidade: parseInt(quantidade),
        automovel: parseInt(automovel),
        concessionaria: parseInt(concessionaria)
      },
      include: {
        possui: true,
        contem: true
      }
    });

    res.status(201).json({ message: 'Alocação cadastrada com sucesso!', alocacao: nova });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar alocação', details: error.message });
  }
};

module.exports = { read, create };
