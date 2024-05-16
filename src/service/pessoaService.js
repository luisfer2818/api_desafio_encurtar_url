const Pessoa = require('../models/pessoa');
const Database = require('../database/conectDB');

class PessoaService {
  async findAllPessoas() {
    const db = new Database();
    db.init();
    try {
      const result = await Pessoa.findAll();
      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async createPessoa(body, res) {
    const db = new Database();
    db.init();
    try {
      const { nome, sobreNome, dataNascimento, email, telefone, endereco, cidade, estado, cep, cpfCnpj } = body;

      const created = await Pessoa.findOrCreate({
        where: { email },
        defaults: {
          nome,
          sobreNome,
          dataNascimento,
          email,
          telefone,
          endereco,
          cidade,
          estado,
          cep,
          cpfCnpj,
        },
      });

      if (created[1]) {
        return {
          message: 'Pessoa Criada com sucesso!',
        };
      }
      return res.status(500).send({ message: 'Essa pessoa ja esta cadastrada!' });
    } finally {
      db.close();
    }
  }
}

module.exports = PessoaService;
