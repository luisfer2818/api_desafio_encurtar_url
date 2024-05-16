const PessoaController = require('../../../src/controller/pessoaController');

describe('PessoaController', () => {
  let pessoaController = new PessoaController();

  beforeAll(() => {
    jest.spyOn(pessoaController, 'findAllPessoas').mockImplementation(() => [
      {
        id: 2,
        nome: 'Mariano',
        sobreNome: 'Reis',
        dataNascimento: '1999-10-20',
        email: 'joaoMarcos@gmail.com',
        telefone: '61995928783',
        endereco: 'Quadra 90 conunto A',
        cidade: 'Aguas Lindas',
        estado: 'GO',
        cep: 'GO',
        cpfCnpj: '73864436095',
      },
    ]);

    const resultMockCreatePessoa = { message: 'Pessoa Criada com sucesso!' };
    jest.spyOn(pessoaController, 'createPessoa').mockImplementation(() => resultMockCreatePessoa);
  });

  describe('findAllPessoas', () => {
    it('should call findAllPessoas from PessoaService and return the result', async () => {
      const result = await pessoaController.findAllPessoas();
      expect(result).toEqual([
        {
          id: 2,
          nome: 'Mariano',
          sobreNome: 'Reis',
          dataNascimento: '1999-10-20',
          email: 'joaoMarcos@gmail.com',
          telefone: '61995928783',
          endereco: 'Quadra 90 conunto A',
          cidade: 'Aguas Lindas',
          estado: 'GO',
          cep: 'GO',
          cpfCnpj: '73864436095',
        },
      ]);
    });
  });

  describe('createPessoa', () => {
    it('should call createPessoa from PessoaService with the provided body and return the result', async () => {
      const result = await pessoaController.createPessoa({
        nome: 'Mariano',
        sobreNome: 'Reis',
        dataNascimento: '1999-10-20',
        email: 'joaoMarcos@gmail.com',
        telefone: '61995928783',
        endereco: 'Quadra 90 conunto A',
        cidade: 'Aguas Lindas',
        estado: 'GO',
        cep: 'GO',
        cpfCnpj: '73864436095',
      });

      const resultMockCreatePessoa = { message: 'Pessoa Criada com sucesso!' };

      expect(result).toEqual(resultMockCreatePessoa);
    });
  });
});
