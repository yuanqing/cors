import corsAnywhere from 'cors-anywhere'
import fs from 'fs'

function main () {
  const args = process.argv.slice(2)
  const [host, port, cert, key] = args
  if (typeof host === 'undefined') {
    throw new Error('Need a `host`')
  }
  if (typeof port === 'undefined') {
    throw new Error('Need a `port`')
  }
  if (typeof cert === 'undefined') {
    throw new Error('Need a `cert`')
  }
  if (typeof key === 'undefined') {
    throw new Error('Need a `key`')
  }
  corsAnywhere
    .createServer({
      httpsOptions: {
        cert: fs.readFileSync(cert, 'utf8'),
        key: fs.readFileSync(key, 'utf8')
      }
    })
    .listen(port, host)
}
main()
