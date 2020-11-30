# Criando um app para cadastro de produtos.

Uma aplicação simples para estudos de Angular 10. Foi criado um sistema que realiza as quatro operações básicas CRUD: create, reade, update e delete.

## Frontend

Comandos executados:

- $ ng new frontend --minimal
- $ ng add @angular/material. Escolhido: Indigo/Pink; Set up global/browser = yes;

Para rodar o frontend bastar executar o comando $ ng serve.

## Backend

Criado utilizando o módulo json-server.
Comandos executados:

- $ npm init -y
- $ npm i json-server

Obs.: no arquivo package.json, deve-se incluir a seguinte linha: "start": "json-server --watch db.json --port 3001"

Para rodar o backend basta executar o comando $ npm start.