import express from 'express';

const app = express();

app.get('/', (req, res) => res.send({ status: 'ok' }));
app.post('/login', (req, res) => res.send({ status: 'not_ok' }));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.info(`Listening in port ${PORT}`));