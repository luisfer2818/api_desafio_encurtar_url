const UrlService = require('../../../src/service/urlService');

describe('UrlService', () => {
  let urlService = new UrlService();

  beforeAll(() => {
    jest.spyOn(urlService, 'findAllPessoas').mockImplementation(() => [
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

  const resultMockCreatePessoa = { message: 'Pessoa Criada com sucesso!' };
  jest.spyOn(pessoaService, 'createPessoa').mockImplementation(() => resultMockCreatePessoa);

  describe('findAllPessoas', () => {
    it('should call findAllPessoas from UrlService and return the result', async () => {
      const result = await urlService.findAllPessoas();
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
      const result = await pessoaService.createPessoa({
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
