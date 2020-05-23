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
    output.starships = output.starships.map((id) => `/api/starships/${id}`);
  }

  if (output.vehicles) {
    output.vehicles = output.vehicles.map((id) => `/api/vehicles/${id}`);
  }

  if (output.planets) {
    output.planets = output.planets.map((id) => `/api/planets/${id}`);
  }

  if (output.characters) {
    output.characters = output.characters.map((id) => `/api/people/${id}`);
  }

  if (output.species) {
    output.species = output.species.map((id) => `/api/species/${id}`);
  }

  if (output.people) {
    output.people = output.people.map((id) => `/api/people/${id}`);
  }

  if (output.pilots) {
    output.pilots = output.pilots.map((id) => `/api/people/${id}`);
  }

  if (output.homeworld) {
    output.homeworld = `/api/planets/${output.homeworld}`;
  }

  if (output.residents) {
    output.residents = output.residents.map((id) => `/api/people/${id}`);
  }

  if (output.films) {
    output.films = output.films.map((id) => `/api/films/${id}`);
  }

  return output;
};

const prepareResults = (pageData, dataUrl) => {
  return pageData.map((data) => {
    data.fields.url = `/api/${dataUrl}/${data.pk}`;
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
  const next = pages > page ? `/api/${dataUrl}?page=${page + 1}` : null;
  const previous = page > 1 ? `/api/${dataUrl}?page=${page - 1}` : null;

  const startsFrom = page * ROWS_PER_PAGE - ROWS_PER_PAGE;
  const pageData = deepClone(data).splice(startsFrom, ROWS_PER_PAGE);

  const results = prepareResults(pageData, dataUrl);

  return { count, pages, next, previous, results };
};

app.get('/', (req, res) => res.send('Server works fine.'));
app.get('/random-string', (req, res) => res.send(generateRandomString()));

app.get('/api/films', (req, res) => {
  const response = preparePageData(req, filmsData, 'films');
  response.characters = [];
  response.planets = [];
  response.starships = [];
  response.vehicles = [];
  response.species = [];

  res.json(response);
});

app.get('/api/people', (req, res) => {
  peopleData.forEach((data) => {
    data.fields.species = speciesData
      .filter((space) => space.fields.people.includes(data.pk))
      .map((space) => space.pk);

    data.fields.films = filmsData
      .filter((film) => film.fields.planets.includes(data.pk))
      .map((film) => film.pk);

    data.fields.vehicles = vehiclesData
      .filter((vehicle) => vehicle.fields.pilots.includes(data.pk))
      .map((vehicle) => vehicle.pk);

    data.fields.starships = starshipsData
      .filter((starship) => starship.fields.pilots.includes(data.pk))
      .map((starship) => starship.pk);
  });

  res.json(preparePageData(req, peopleData, 'people'));
});

app.get('/api/planets', (req, res) => {
  planetsData.forEach((data) => {
    data.fields.residents = peopleData
      .filter((character) => character.fields.homeworld === data.pk)
      .map((character) => character.pk);

    data.fields.films = filmsData
      .filter((film) => film.fields.planets.includes(data.pk))
      .map((film) => film.pk);
  });

  res.json(preparePageData(req, planetsData, 'planets'));
});

app.get('/api/species', (req, res) => {
  res.json(preparePageData(req, speciesData, 'species'));
});

app.get('/api/starships', (req, res) => {
  starshipsData.forEach((data) => {
    data.fields.films = filmsData
      .filter((film) => film.fields.starships.includes(data.pk))
      .map((film) => film.pk);
  });

  res.json(preparePageData(req, starshipsData, 'starships'));
});

app.get('/api/vehicles', (req, res) => {
  vehiclesData.forEach((data) => {
    data.fields.films = filmsData
      .filter((film) => film.fields.vehicles.includes(data.pk))
      .map((film) => film.pk);

    data.fields = {
      ...data.fields,
      ...transportData.find((transport) => transport.pk === data.pk).fields,
    };
  });

  res.json(preparePageData(req, vehiclesData, 'vehicles'));
});

http.listen(port, function () {
  console.log('listening on *:' + port);
});
