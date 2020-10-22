// ! O TYPESCRIPT HABILITA TODAS AS NOVAS FUNCIONALIDADES DO JS POR PADRÃO
// * POR EXEMPLO O IMPORT

import express from 'express';
import { helloWorld } from './routes'
const app = express();

app.get("/", helloWorld);

app.listen(3333);