# MICROSSERVIÇO DE ENCURTAR URL E PESSOAS

# Pré-requisitos

- versão do node 14.16.1
- executar o script sql -> script.sql
- alterar o arquivo .env de acordo com as suas configurações do banco de dados

# Como executar o projeto

- npm install
- npm run start

# Rotas mapedas para teste

GET localhost:3000/pessoas

POST localhost:3000/shorten

GET localhost:3000/:shortUrl

DELETE localhost:3000/listar/urls

POST localhost:3000/login

# Como executar os teste unitário

- npm test
