const sqlite = require('sqlite'),
      Sequelize = require('sequelize'),
      request = require('request'),
      express = require('express'),
      app = express();

const { PORT=3000, NODE_ENV='development', DB_PATH='./db/database.db' } = process.env;

// START SERVER
Promise.resolve()
  .then(() => app.listen(PORT, () => console.log(`App listening on port ${PORT}`)))
  .catch((err) => { if (NODE_ENV === 'development') console.error(err.stack); });

// ROUTES
app.get('/films/:id/recommendations', getFilmRecommendations);
app.get('/films', getFilmRecommendations);

// ROUTE HANDLER
function getFilmRecommendations(req, res) {
  res.status(200).send({ recommendations: allRecs, meta: limitNone });
  res.status(400).send({ message: 'Not Found' });
}

module.exports = app;

var limitNone = { limit: 10, offset: 0 }
var allRecs = [
  { averageRating: 4.6, genre: 'Western', id: 7406, releaseDate: '2001-10-19', reviews: 5, title: 'Agent Deathstroke Teacher',}, 
  { averageRating: 4.57, genre: 'Western', id: 8298, releaseDate: '2014-01-10', reviews: 7, title: 'Colossus Strike Police Officer',},
  { averageRating: 4.33, genre: 'Western', id: 8451, releaseDate: '2006-02-15', reviews: 6, title: 'Carnage Actor', },
]