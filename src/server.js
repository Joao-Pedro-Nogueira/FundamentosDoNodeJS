import http from 'node:http'
import { json } from './middlewares/json.js'

// CommonJS => const givenModuleName = require('moduleName)
// ESModules => import { givenModuleName } from 'moduleName'
// Para usar o ESModules, ir no package.json e adicionar a propriedade "type": "module"
// Para utilizar módulos próprios do Node, utilize a sintaxe da importação como do http acima ('node:${módulo}')

// Primeiramente iremos trabalhar com uma aplicação STATEFUL.

const users = []

// A resposta dada ao Array não pode ser um Array, portanto iremos utilizar JSON - JavaScript Object Notation (string). Muito utilizado na comunicação back-end <-> front-end & back-end <-> back-end

// Argumentos: require (req) e response (res). Utilizado para acessar os respectivos dados
const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email
    })

    return res
      .writeHead(201) //201 -> New ressourse created successfully
      .end() // Não presisa de nenhuma informação adicional
  }

  if (method === 'GET' && url === '/users') {
    return res.end(JSON.stringify(users))
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

  return res.writeHead(404).end('Not found :(')
})

server.listen(3333) // localhost:3333
