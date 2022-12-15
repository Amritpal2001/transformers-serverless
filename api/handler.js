const { encode } = require('gpt-3-encoder')

export default function handler(request, response) {
    if (request.method === 'GET') {
      // Get the value of the "text" parameter from the query string
      const text = request?.query?.text;
      if (!text) {
        return response.status(400).end(); // Bad Request
      }
      return response.status(200).json(
        {
          "data": {
            "token_ids": encode(text)
          }
        }
      );
    } else {
      return response.status(405).end(); // Method Not Allowed
    }
  }
