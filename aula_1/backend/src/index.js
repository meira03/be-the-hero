const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app =  express();

app.use(cors());
app.use(express.json()); //avisa que está usando json - transforma o json em algo entendivel pela aplicação
app.use(routes);

/*
-ROta é o link inteiro localhost:3333/users  facebook.com/Gabriel_Meira
-Recurso é oq vem dps da barra ^^ users                 ^^GAbriel_Meira
*/

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

/*
    **** Tipos de Banco de dados **** 
* SQL:   MySQL, *SQLite*, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB - bd não relacionais
*/ 

 /*
    Driver_padrão: SELECT * from users where in(Marcos)
    Query Builder js: table('user').select('*').where() - vamo usa o knex.js
 */

app.listen(3333);

