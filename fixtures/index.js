import { deepClone } from './../utils/deepClone.js';
import { orderedObject } from './../utils/orderedObject.js';
import films from './films.js';
import people from './people.js';
import planets from './planets.js';
import species from './species.js';
import starships from './starships.js';
import transport from './transport.js';
import vehicles from './vehicles.js';

const fixtures = {
  people,
  films,
  planets,
  species,
  starships,
  transport,
  vehicles,
};

const convertRelations = (fields, apiPath) => {
  const output = deepClone(fields);

  if (output.starships) {
    output.starships = output.starships.map(
      (id) => `${apiPath}starships/${id}`
    );
  }

  if (output.vehicles) {
    output.vehicles = output.vehicles.map((id) => `${apiPath}vehicles/${id}`);
  }

  if (output.planets) {
    output.planets = output.planets.map((id) => `${apiPath}planets/${id}`);
  }

  if (output.characters) {
    output.characters = output.characters.map((id) => `${apiPath}people/${id}`);
  }

  if (output.species) {
    output.species = output.species.map((id) => `${apiPath}species/${id}`);
  }

  if (output.people) {
    output.people = output.people.map((id) => `${apiPath}people/${id}`);
  }

  if (output.pilots) {
    output.pilots = output.pilots.map((id) => `${apiPath}people/${id}`);
  }

  if (output.homeworld) {
    output.homeworld = `${apiPath}planets/${output.homeworld}`;
  }

  if (output.residents) {
    output.residents = output.residents.map((id) => `${apiPath}people/${id}`);
  }

  if (output.films) {
    output.films = output.films.map((id) => `${apiPath}films/${id}`);
  }

  return output;
};

const sortAndClearResults = (fixturesData, dataUrl, apiPath) => {
  return fixturesData.map((data) => {
    data.fields.url = `${apiPath}${dataUrl}/${data.pk}`;
    delete data.model;
    delete data.pk;

    return orderedObject(data.fields);
  });
};

const prepareFixtures = (apiPath = '/') => {
  // films
  fixtures.films.forEach(
    (data) => (data.fields = convertRelations(data.fields, apiPath))
  );

  // people
  fixtures.people.forEach((data) => {
    data.fields.species = fixtures.species
      .filter((space) => space.fields.people.includes(data.pk))
      .map((space) => space.pk);

    data.fields.films = fixtures.films
      .filter((film) => film.fields.planets.includes(data.pk))
      .map((film) => film.pk);

    data.fields.vehicles = fixtures.vehicles
      .filter((vehicle) => vehicle.fields.pilots.includes(data.pk))
      .map((vehicle) => vehicle.pk);

    data.fields.starships = fixtures.starships
      .filter((starship) => starship.fields.pilots.includes(data.pk))
      .map((starship) => starship.pk);

    data.fields = convertRelations(data.fields, apiPath);
  });

  // planets
  fixtures.planets.forEach((data) => {
    data.fields.residents = fixtures.people
      .filter((character) => character.fields.homeworld === data.pk)
      .map((character) => character.pk);

    data.fields.films = fixtures.films
      .filter((film) => film.fields.planets.includes(data.pk))
      .map((film) => film.pk);

    data.fields = convertRelations(data.fields, apiPath);
  });

  // species
  fixtures.species.forEach(
    (data) => (data.fields = convertRelations(data.fields, apiPath))
  );

  // starships
  fixtures.starships.forEach((data) => {
    data.fields.films = fixtures.films
      .filter((film) => film.fields.starships.includes(data.pk))
      .map((film) => film.pk);

    data.fields = convertRelations(data.fields, apiPath);
  });

  // transport
  fixtures.transport.forEach(
    (data) => (data.fields = convertRelations(data.fields, apiPath))
  );

  // vehicles
  fixtures.vehicles.forEach((data) => {
    data.fields.films = fixtures.films
      .filter((film) => film.fields.vehicles.includes(data.pk))
      .map((film) => film.pk);

    data.fields = {
      ...data.fields,
      ...fixtures.transport.find((transport) => transport.pk === data.pk)
        .fields,
    };

    data.fields = convertRelations(data.fields, apiPath);
  });

  Object.keys(fixtures).forEach((key) => {
    sortAndClearResults(fixtures[key], key, apiPath);
  });

  return fixtures;
};

export { prepareFixtures };
