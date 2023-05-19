import * as express from "express";
import * as dotenv from 'dotenv';
import { Request } from "express";
import * as cors from 'cors'
dotenv.config();

import routes from './routes';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors<Request>()) // aceitar requisiçõess de outros domínios.
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

app.use(routes);