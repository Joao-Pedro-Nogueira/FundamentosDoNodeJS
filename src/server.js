import http from 'node:http'

// CommonJS => const givenModuleName = require('moduleName)
// ESModules => import { givenModuleName } from 'moduleName'
// Para usar o ESModules, ir no package.json e adicionar a propriedade "type": "module"
// Para utilizar módulos próprios do Node, utilize a sintaxe da importação como do http acima ('node:${módulo}')

// Stateful != Stateless
// Stateful sempre tem uma informação sendo guardada em memória e depende dessa memória para que ela continue funionando
// Stateless não salva as informações em memória. Geralmente armazena em dispositivos externos. Portanto ela não depende da memória e pode ser reiniciada e irá manter o comportamento normal.
// Primeiramente iremos trabalhar com uma aplicação STATEFUL.

const users = []

// A resposta dada ao Array não pode ser um Array, portanto iremos utilizar JSON - JavaScript Object Notation (string). Muito utilizado na comunicação back-end <-> front-end & back-end <-> back-end

// Headers (requisição e resposta) => METADADOS para que tanto o FE quanto o BE saibam lidar com determinada requisição ou resposta. Documentação: (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
// Podem ser utilizados back-end <-> front-end.

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
    return res
      .setHeader('Content-type', 'aplication/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'João',
      email: 'jpedronogueira.dev@gmail.com'
    })

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
