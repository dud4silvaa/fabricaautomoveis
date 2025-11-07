const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const automoveis = await prisma.automovel.findMany({
      include: { alocacoes: true }
    });
    res.json(automoveis);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar automóveis' });
  }
};

module.exports = { read };
