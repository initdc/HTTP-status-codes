# HTTP-status-codes

> Response with HTTP status code that you request

## Design

```js
http.example.com / 200

/*
@200:   request code
*/
```

## Usage

```sh
# yarn dev 

curl "http://localhost:8787/200"
```

## Deploy

1. create a worker

2. paste the code from `index.js`

3. set route for `http.example.com`

4. create DNS record for `http.example.com`

## Reference

[Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)

## Powered by

[Cloudflare Workers](https://workers.dev/)

## License

MIT
