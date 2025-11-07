const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    const vendas = await prisma.venda.findMany({
      include: {
        compra: true, // cliente
        faz: {
          include: {
            possui: true,        // automóvel
            contem: true         // concessionária
          }
        }
      }
    });
    res.json(vendas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar vendas' });
  }
};

const create = async (req, res) => {
  try {
    const { cliente, alocacao } = req.body;

    // Verifica se há estoque disponível
    const aloc = await prisma.alocacao.findUnique({
      where: { id: parseInt(alocacao) }
    });

    if (!aloc || aloc.quantidade <= 0) {
      return res.status(400).json({ error: 'Sem veículos disponíveis para venda.' });
    }

    // Cria a venda conectando cliente e alocação
    const venda = await prisma.venda.create({
      data: {
        compra: { connect: { id: parseInt(cliente) } },
        faz: { connect: { id: parseInt(alocacao) } },
        data: new Date()
      },
      include: {
        compra: true,
        faz: { include: { possui: true, contem: true } }
      }
    });

    // Atualiza quantidade da alocação
    await prisma.alocacao.update({
      where: { id: parseInt(alocacao) },
      data: {
        quantidade: { decrement: 1 }
      }
    });

    res.json({ message: 'Venda realizada com sucesso!', venda });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao realizar venda', details: error.message });
  }
};

module.exports = { read, create };
