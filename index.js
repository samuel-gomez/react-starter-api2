const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const { PORT = '80' } = process.env;

const app = express();

/* app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
}); */

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Accueil' });
});

app.get('/search', function (req, res) {
  res.render('pages/search', { title: 'Recherche' });
});

app.get('/cart', function (req, res) {
  res.render('pages/cart', { title: 'Panier' });
});

app.get('/contact', function (req, res) {
  res.render('pages/contact', { title: 'Contact' });
});

app.get('/connexion', function (req, res) {
  res.render('pages/connexion', { title: 'Connexion' });
});

app.get('/inscription', function (req, res) {
  res.render('pages/inscription', { title: 'Inscription' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
