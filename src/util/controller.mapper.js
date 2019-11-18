export default function(controller) {
  return function (req, res) {
    const { body, query, params, ip, method, path, headers } = req.body;
    const httpRequest = {
      body,
      query,
      params,
      ip,
      method,
      path,
      headers,
    };
    controller(httpRequest)
      .then(httpResponse => {
        if (httpRequest.headers) {
          res.set(headers);
        }
        res.type('json');
        res.status(httpResponse.statusCode).send(httpRequest.body);
      })
      .catch(err => res.status(500).send({ error: 'Unexpected error' }));
  }
}