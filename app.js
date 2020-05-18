const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

const cors = require('cors');
const bodyParser = require('body-parser');

const ROWS_PER_PAGE = 10;
const filmsData = require('./fixtures/films.json');
const peopleData = require('./fixtures/people.json');
const planetsData = require('./fixtures/planets.json');
const speciesData = require('./fixtures/species.json');
const starshipsData = require('./fixtures/starships.json');
const transportData = require('./fixtures/transport.json');
const vehiclesData = require('./fixtures/vehicles.json');

// express app config
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

function generateRandomString(length = 10) {
  const possibleCharacters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let output = '';
  for (let i = 0; i < length; i++) {
    output += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  return output;
}

const deepClone = (data) => JSON.parse(JSON.stringify(data));

const convertRelations = (fields) => {
  const output = deepClone(fields);
  if (output.starships) {
    output.starships = output.starships.map((id) => `/starships/${id}`);
  }

  if (output.vehicles) {
    output.vehicles = output.vehicles.map((id) => `/vehicles/${id}`);
  }

  if (output.planets) {
    output.planets = output.planets.map((id) => `/planets/${id}`);
  }

  if (output.characters) {
    output.characters = output.characters.map((id) => `/people/${id}`);
  }

  if (output.species) {
    output.species = output.species.map((id) => `/species/${id}`);
  }

  if (output.people) {
    output.people = output.people.map((id) => `/people/${id}`);
  }

  if (output.homeworld) {
    output.homeworld = `/planets/${output.homeworld}`;
  }

  return output;
};

const prepareResults = (pageData) => {
  return pageData.map((data) => {
    delete data.model;
    delete data.pk;
    return convertRelations(data.fields);
  });
};

const preparePageData = (req, data, dataUrl) => {
  let page = 1;
  if (req.query && req.query.page) {
    page = parseInt(req.query.page, 10);
  }

  const count = data.length;
  const pages = Math.ceil(count / ROWS_PER_PAGE);
  const next = pages > page ? `/${dataUrl}?page=${page + 1}` : null;
  const previous = page > 1 ? `/${dataUrl}?page=${page - 1}` : null;

  const startsFrom = page * ROWS_PER_PAGE - ROWS_PER_PAGE;
  const pageData = deepClone(data).splice(startsFrom, ROWS_PER_PAGE);

  const results = prepareResults(pageData);

  return { count, pages, next, previous, results };
};

app.get('/', (req, res) => res.send('Server works fine.'));
app.get('/random-string', (req, res) => res.send(generateRandomString()));

app.get('/films', (req, res) => {
  res.json(preparePageData(req, filmsData, 'films'));
});

app.get('/people', (req, res) => {
  res.json(preparePageData(req, peopleData, 'people'));
});

app.get('/planets', (req, res) => {
  res.json(preparePageData(req, planetsData, 'planets'));
});

app.get('/species', (req, res) => {
  res.json(preparePageData(req, speciesData, 'species'));
});

app.get('/starships', (req, res) => {
  res.json(preparePageData(req, starshipsData, 'starships'));
});

app.get('/vehicles', (req, res) => {
  res.json(preparePageData(req, transportData, 'vehicles'));
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
