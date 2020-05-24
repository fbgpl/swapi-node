import cors from 'cors';
import express from 'express';
import http from 'http';
import { prepareFixtures } from './fixtures/index.js';
import { deepClone } from './utils/deepClone.js';

const app = express();
const httpServer = http.Server(app);

// project constants
const PORT = process.env.PORT || 3000;
const ROWS_PER_PAGE = 10;
const API_PATH = '/api/';
const fixtures = prepareFixtures(API_PATH);

// express app config
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const preparePageData = (req, data, dataUrl) => {
  let page = 1;
  if (req.query && req.query.page) {
    page = parseInt(req.query.page, 10);
  }

  const count = data.length;
  const pages = Math.ceil(count / ROWS_PER_PAGE);
  const next = pages > page ? `${API_PATH}${dataUrl}?page=${page + 1}` : null;
  const previous = page > 1 ? `${API_PATH}${dataUrl}?page=${page - 1}` : null;

  const startsFrom = page * ROWS_PER_PAGE - ROWS_PER_PAGE;
  const results = deepClone(data).splice(startsFrom, ROWS_PER_PAGE);

  return { count, pages, next, previous, results };
};

const prepareSingleResult = (data, dataUrl, id) => {
  return data.find((res) => res.fields.url === `${API_PATH}${dataUrl}/${id}`);
};

app.get(`${API_PATH}:fixtureName`, (req, res) => {
  const { fixtureName } = req.params;
  res.json(preparePageData(req, fixtures[fixtureName], fixtureName));
});

app.get(`${API_PATH}:fixtureName/:id`, (req, res) => {
  const { fixtureName, id } = req.params;
  res.json(prepareSingleResult(fixtures[fixtureName], fixtureName, id));
});

httpServer.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});
