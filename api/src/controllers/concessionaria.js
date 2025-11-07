const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const concessionarias = await prisma.concessionaria.findMany({
      include: { alocacoes: true }
    });
    res.json(concessionarias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar concessionárias' });
  }
};

module.exports = { read };
    