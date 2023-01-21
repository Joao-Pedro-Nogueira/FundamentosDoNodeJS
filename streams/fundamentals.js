// É muito comum conectar streams.

// process.stdin // Tudo o que recebo como entrada
//   .pipe(process.stdout) // está sendo escaminhado para a saída. Pipe tradução literal: encanamento.

import { Readable, Writable, Transform } from 'node:stream'
import { callbackify } from 'node:util'

class OneToOneHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 200)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callcack) {
    console.log(Number(chunk.toString()) * 10)
    callcack()
  }
}

new OneToOneHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
