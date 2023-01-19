import http from 'node:http'

// CommonJS => const givenModuleName = require('moduleName)
// ESModules => import { givenModuleName } from 'moduleName'
// Para usar o ESModules, ir no package.json e adicionar a propriedade "type": "module"
// Para utilizar módulos próprios do Node, utiliza a sintaxe da importação igual do http acima

// Argumentos: require (req) e response (res). Utilizado para acessar os respectivos dados
const server = http.createServer((req, res) => {
  return res.end('Hello world')
})

server.listen(3333) // localhost:3333
