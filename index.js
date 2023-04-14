import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { PORT = '80' } = process.env;
import { API } from './api/constants.js';
import {
  members,
  membersDetail,
  membersSearch,
  downloadDetails,
} from './api/members/index.js';
import { people } from './api/people/index.js';
import { convert } from './api/currency/index.js';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

router.get('/members', members);
router.get('/members/search', membersSearch);
router.get('/members/:id', membersDetail);
router.get('/members/:id/download-detail', downloadDetails);
router.get('/people', people);
router.get('/convert/:base_currency', convert);

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Accueil' });
});

app.use(`/${API}`, router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
