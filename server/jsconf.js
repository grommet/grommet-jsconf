import compression from 'compression';
import express from 'express';
import http from 'http';
import path from 'path';
import basicAuth from 'basic-auth-connect';

const PORT = process.env.PORT || 9050;

const app = express();
app.use(compression());
app.use(basicAuth('uruguay', 'forlan&suarez'));

app.use('/', express.static(path.join(__dirname, '/../dist')));

const server = http.createServer(app);
server.listen(PORT);

console.log(`Server started, listening at: http://localhost:${PORT}...`);
