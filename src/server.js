import http from 'node:http'

// CommonJS => const givenModuleName = require('moduleName)
// ESModules => import { givenModuleName } from 'moduleName'
// Para usar o ESModules, ir no package.json e adicionar a propriedade "type": "module"
// Para utilizar módulos próprios do Node, utiliza a sintaxe da importação igual do http acima

// Rotas HTTP no servidor são caminhos de entrada na aplicação para receber requisições e enviar respostas.
// Rota HTTP = API
// Exemplos de rotas: Criação de usuários, listagem de usuários, edição de usuários, remoção de usuários
//
// Cada rota HTTP precisa de DUAS informações:

// -> URL (Uniform Resource Locator)
// -> Método HTTP
// Exemplos de rotas => Criação de usuários => POST /users

// GET -> LISTAGEM DE USUÁRIOS -> Listagem de recursos no back-end
// POST -> CRIAÇÃO DE USUÁRIOS -> Criação de recursos no back-end
// PUT -> EDIÇÃO DE USUÁRIOS -> Atualização de um recurso (quase) por completo no back-end
// PATCH -> EDIÇÃO DE USUÁRIOS -> Atualização de uma informação específica de um recurso no back-end
// DELETE -> REMOÇÃO DE USUÁRIOS -> Deleção de um recurso  no back-end

// Argumentos: require (req) e response (res). Utilizado para acessar os respectivos dados
const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuários')
  }

  if (method === 'PUT' && url === '/users') {
    return res.end('Alteração de usuários')
  }

  if (method === 'PATCH' && url === '/users') {
    return res.end('Alteração parcial de usuários')
  }

  if (method === 'DELETE' && url === '/users') {
    return res.end('Deleção de usuários')
  }

  return res.end('Hello world')
})

server.listen(3333) // localhost:3333
