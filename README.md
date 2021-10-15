```
$ brew install mkcert
$ mkcert -install

$ git clone https://github.com/yuanqing/cors
$ cd cors
$ yarn install
$ mkcert -cert-file cert.pem -key-file key.pem 0.0.0.0
$ node index.js 0.0.0.0 4242 ./cert.pem ./key.pem
```
