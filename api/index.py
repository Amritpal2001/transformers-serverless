from http.server import BaseHTTPRequestHandler
from urllib import parse
from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")


def count_tokens(text) -> int:
        return len(tokenizer(text)["input_ids"])
class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Parse the form data
        form = parse.parse_qs(self.rfile.read(int(self.headers['Content-Length'])))

        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        if "text" in form:
            print(form["text"][0])
            message = {"tokens": count_tokens(form["text"][0])}
        self.wfile.write(message.encode())
        return