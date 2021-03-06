const dao = require('./dao')

module.exports = (app) => {

  const updateMovie = (req, res) =>
    dao.updateMovie(req.params.id, req.body)
      .then(status => res.send(status));

  const findMovieById = (req, res) =>
    dao.findMovieById(req.params.id)
      .then(movie => res.json(movie));

  const createMovie = (req, res) =>
    dao.createMovie(req.body)
      .then((insertedMovie) => res.json(insertedMovie));

  const deleteMovie = (req, res) =>
    dao.deleteMovie(req.params.id)
      .then((status) => res.send(status));

  const findAllMovies = (req, res) =>
    dao.findAllMovies()
      .then(movies => res.json(movies));

  app.put("/rest/movies/:id", updateMovie);
  app.get("/rest/movies/:id", findMovieById);
  app.post("/rest/movies", createMovie);
  app.delete("/rest/movies/:id", deleteMovie);
  app.get("/rest/movies", findAllMovies);

}

