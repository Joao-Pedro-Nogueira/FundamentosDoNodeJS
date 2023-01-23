import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// CommonJS => const givenModuleName = require('moduleName)
// ESModules => import { givenModuleName } from 'moduleName'
// Para usar o ESModules, ir no package.json e adicionar a propriedade "type": "module"
// Para utilizar módulos próprios do Node, utilize a sintaxe da importação como do http acima ('node:${módulo}')

// A resposta dada não pode ser um Array, portanto iremos utilizar JSON - JavaScript Object Notation (string). Muito utilizado na comunicação back-end <-> front-end & back-end <-> back-end

// Argumentos: require (req) e response (res). Utilizado para acessar os respectivos dados
const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    req.params = { ...routeParams.groups }

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333) // localhost:3333
