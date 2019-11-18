import express from 'express';

import { loginController } from './controllers';
import controllerMapper from './util/controller.mapper';

const app = express();

app.get('/', (req, res) => res.send({ status: 'ok' }));
app.post('/login', controllerMapper(loginController));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.info(`Listening in port ${PORT}`));