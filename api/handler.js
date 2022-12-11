const { encode } = require('gpt-3-encoder')

export default function handler(request, response) {
    if (request.method === 'POST') {
      // Get the value of the "text" parameter from the request body
      const text = request.body.text;
      return response.status(200).json({"tokens": encode(text).length});
    } else {
      return response.status(405).end(); // Method Not Allowed
    }
  }
