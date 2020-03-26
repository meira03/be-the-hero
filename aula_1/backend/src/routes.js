/*
    **** Métodos HTTP **** CRUD?
POST: Criar informação no back end          - Create -
GET: Buscar/listar informação do back-end   - Read -qnd criar uma rota que o backend retornar uma info - 
        - requisita uma url => pega info da url   
PUT: Alterar uma informação                 - Update
DELETE: Deletar informação no back-end      - Delete
*/ 

/*
    **** Tipos de parâmetros ****
* Query Params: Parâmetros nomeados enviados na rota após "?" - Filtra, Paginação
    ^^^^^^^^>>>>>>localhost:3333/users?page=2&nome=Gabriel&idade=16
    request.query ---------get

* Route Params: Parâmetros utilizados para identificar recursos - get
    ^>localhost:3333/users/1
    app.get('/users/:id',(request,response ).........)
    request.params

* Request Body: Corpo da requisição - cria ou altera recursos -post
    app.post('/users', (request,response)..............)
    request.body
*/ 

/*
    Request: GUarda todos os dados que vem da *requisição*
        - dados do navegador pro servidor
    Response: Retorna uma resposta pro usuário
        - dados do servidor pro navegador
*/


const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;