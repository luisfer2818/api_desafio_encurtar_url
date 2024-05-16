const PessoaService = require('../service/pessoaService');

class PessoaController {
  async findAllPessoas() {
    const pessoaService = new PessoaService();

    const result = await pessoaService.findAllPessoas({
      raw: true,
    });
    return result;
  }

  async createPessoa(body, res) {
    const pessoaService = new PessoaService();

    const result = await pessoaService.createPessoa(body, res);
    return result;
  }
}
module.exports = PessoaController;
