const HTTP_STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "(Unused)",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required",
};

const NO_BODY = [101, 204, 205, 304];

const REDIRECT = [301, 302, 303, 307, 308];

const HEADERS = {
  "content-type": "application/json",
  "access-control-allow-credentials": "true",
  "access-control-allow-origin": "*",
  "access-control-expose-headers": "Location",
};

addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  const reqCode = Number(pathname.split("/")[1]) || 200;

  const resObj = {};
  resObj.status = reqCode;
  resObj.statusText = HTTP_STATUS_CODES[reqCode] || "Unassigned";

  if (NO_BODY.indexOf(reqCode) !== -1) {
    return new Response(null, {
      status: reqCode,
      headers: HEADERS,
    });
  }

  if (REDIRECT.indexOf(reqCode) !== -1) {
    return new Response(null, {
      status: reqCode,
      headers: { ...HEADERS, location: "https://moz.one" },
    });
  }

  return new Response(JSON.stringify(resObj, null, 2), {
    status: reqCode,
    headers: HEADERS,
  });
}
