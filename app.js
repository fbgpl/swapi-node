import cors from 'cors';
import express from 'express';
import http from 'http';
import {
  films,
  people,
  planets,
  species,
  starships,
  transport,
  vehicles,
} from './fixtures/index.js';
import { deepClone } from './utils/deepClone.js';
import { orderedObject } from './utils/orderedObject.js';

const app = express();
const httpServer = http.Server(app);

// project constants
const PORT = process.env.PORT || 3000;
const ROWS_PER_PAGE = 10;

// express app config
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

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

    return convertRelations(orderedObject(data.fields));
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

const prepareSingleResult = (data, dataUrl, id) => {
  const pageData = deepClone(data);
  const results = prepareResults(pageData, dataUrl);
  return results.find((res) => res.url === `/api/${dataUrl}/${id}`);
};

app.get('/api/films', (req, res) => {
  res.json(preparePageData(req, films, 'films'));
});

app.get('/api/films/:id', (req, res) => {
  res.json(prepareSingleResult(films, 'films', req.params.id));
});

app.get('/api/people', (req, res) => {
  people.forEach((data) => {
    data.fields.species = species
      .filter((space) => space.fields.people.includes(data.pk))
      .map((space) => space.pk);

    data.fields.films = films
      .filter((film) => film.fields.planets.includes(data.pk))
      .map((film) => film.pk);

    data.fields.vehicles = vehicles
      .filter((vehicle) => vehicle.fields.pilots.includes(data.pk))
      .map((vehicle) => vehicle.pk);

    data.fields.starships = starships
      .filter((starship) => starship.fields.pilots.includes(data.pk))
      .map((starship) => starship.pk);
  });

  res.json(preparePageData(req, people, 'people'));
});

app.get('/api/planets', (req, res) => {
  planets.forEach((data) => {
    data.fields.residents = people
      .filter((character) => character.fields.homeworld === data.pk)
      .map((character) => character.pk);

    data.fields.films = films
      .filter((film) => film.fields.planets.includes(data.pk))
      .map((film) => film.pk);
  });

  res.json(preparePageData(req, planets, 'planets'));
});

app.get('/api/species', (req, res) => {
  res.json(preparePageData(req, species, 'species'));
});

app.get('/api/starships', (req, res) => {
  starships.forEach((data) => {
    data.fields.films = films
      .filter((film) => film.fields.starships.includes(data.pk))
      .map((film) => film.pk);
  });

  res.json(preparePageData(req, starships, 'starships'));
});

app.get('/api/vehicles', (req, res) => {
  vehicles.forEach((data) => {
    data.fields.films = films
      .filter((film) => film.fields.vehicles.includes(data.pk))
      .map((film) => film.pk);

    data.fields = {
      ...data.fields,
      ...transport.find((transport) => transport.pk === data.pk).fields,
    };
  });

  res.json(preparePageData(req, vehicles, 'vehicles'));
});

httpServer.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});
