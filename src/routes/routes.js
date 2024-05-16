const express = require('express');
const app = express();
const UrlController = require('../controller/urlController');
const PessoaController = require('../controller/pessoaController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const urlController = new UrlController();
const pessoaController = new PessoaController();

app.get('/pessoas', async function (req, res, next) {
  try {
    const result = await pessoaController.findAllPessoas();
    return res.json(result);
  } catch (error) {
    next(error.message);
  }
});

// Rota para encurtar uma URL
app.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }

  const result = await urlController.encurtarUrl(originalUrl);

  try {
    return res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para redirecionar para o URL original
app.get('/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const result = await urlController.redirectUrl(shortUrl);
    return res.redirect(result.url_original);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/listar/urls', async (req, res) => {
  try {
    const result = await urlController.findAllUrls();
    return res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/:shorten', async (req, res) => {
  try {
    const hash = req.params.shorten;
    const result = await urlController.deletarUrls(hash);
    return res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// rota para retornar um token JWT
app.post('/login', (req, res) => {
  const email = 'luis@gmail.com';
  const password = '1234';

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: 'Luis Fernando',
      email,
      role: ['sysAdmin'],
    };

    const token = jwt.sign({ data }, 'SECRET', {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: 'Usuário ou senha incorreta' });
});

module.exports = app;
