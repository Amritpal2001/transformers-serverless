const { encode } = require('gpt-3-encoder')

export default function handler(request, response) {
    if (request.method === 'GET') {
      // Get the value of the "text" parameter from the query string
      const text = request.query.text;
      return response.status(200).json({"tokens": encode(text).length});
    } else {
      return response.status(405).end(); // Method Not Allowed
    }
  }
