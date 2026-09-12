"""Serve the production files with the same directory/404 behavior as Pages."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='build', **kwargs)

    def send_error(self, code, message=None, explain=None):
        fallback = Path('build/404.html')
        if code == 404 and fallback.exists():
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(fallback.read_bytes())
        else:
            super().send_error(code, message, explain)

ThreadingHTTPServer(('127.0.0.1', 4173), Handler).serve_forever()
