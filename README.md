# HTTP-status-codes

> Response with HTTP status code that you request

## Design

```js
http.example.com / 200;

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

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

[Hypertext Transfer Protocol (HTTP) Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)

## Powered by

[Cloudflare Workers](https://workers.dev/)

## License

MIT
