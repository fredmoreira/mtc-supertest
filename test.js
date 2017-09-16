var assert = require('chai').assert,
  request = require('supertest'),
  expect = require('chai').expect;

var url = 'http://www.omdbapi.com';

describe('Tests API OMDB MTC - GET', function() {
  it('/GET filme Batman', function(done) {
    request(url)
      .get('/?t=Batman&apikey=1bcadfd2')
      .end(function(err, res) {
        var result = JSON.parse(res.text);
        assert.equal(res.status, 200);
        assert.equal(result.Title, 'Batman', 'Conferindo o Título!');
        assert.equal(result.Year, '1989', 'Conferindo o Ano!');
        assert.equal(result.Rated, 'PG-13', 'Conferindo o Rated!');
        assert.equal(result.Released, '23 Jun 1989', 'Conferindo o Released!');
        assert.equal(result.Runtime, '126 min', 'Conferindo o Runtime!');
        assert.equal(result.Genre, 'Action, Adventure', 'Conferindo o Genre!');
        assert.equal(result.Writer, 'Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)', 'Conferindo o Writer!');
        assert.equal(result.Actors, 'Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl', 'Conferindo o Actors!');
        assert.equal(result.Plot, 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.', 'Conferindo o Plot!');
        assert.equal(result.Language, 'English, French', 'Conferindo o Language!');
        assert.equal(result.Country, 'USA, UK', 'Conferindo o Country!');
        assert.equal(result.Awards, 'Won 1 Oscar. Another 9 wins & 26 nominations.', 'Conferindo o Awards!');
        assert.equal(result.Director, 'Tim Burton', 'Conferindo o Director!');
        assert.equal(result.Type, 'movie', 'Conferindo o Type!');
        assert.equal(result.DVD, '25 Mar 1997', 'Conferindo o DVD!');
        assert.equal(result.Metascore, '69', 'Conferindo o Metascore!');
        assert.equal(result.imdbRating, '7.6', 'Conferindo o imdbRating!');
        assert.equal(result.imdbVotes, '287,055', 'Conferindo o imdbVotes!');
        done();
      });
  });

  it('/GET Filme não encontrado.', function(done) {
    request(url)
      .get('/?t=Dollynho&apikey=1bcadfd2')
      .end(function(err, res) {
        var result = JSON.parse(res.text);
        assert.equal(res.status, 200);
        assert.equal(result.Response, 'False', 'Conferindo o Response!');
        assert.equal(result.Error, 'Movie not found!', 'Conferindo o Error!');
        done();
      });
  });
});
