const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* 
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); */

const { PORT = '80' } = process.env;

const app = express();

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

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Accueil' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
