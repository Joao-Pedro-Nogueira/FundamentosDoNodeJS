import { Readable } from 'node:stream'

class OneToOneHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 1000) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 200)
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToOneHundredStream(),
  duplex: 'half'
})
