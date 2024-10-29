let api = "https://www.omdbapi.com/?apikey=28462748&t=";

let title = document.getElementById("title");
let desc = document.getElementById("desc");
let year = document.getElementById("year");
let genre = document.getElementById("genre");
let actors = document.getElementById("actors");
let director = document.getElementById("director");
let boxOffice = document.getElementById("boxOffice");
let awards = document.getElementById("awards");
let writer = document.getElementById("writer");
let ratings = document.getElementById("ratings");
let poster = document.getElementById("poster");

let container = document.getElementById("container");
container.style.display = "none";

function searchMovie() {
  // start animation
  let name = document.getElementById("movie-name");
  let query = api + name.value;
  console.log(query);
  fetch(query)
    .then((data) => {
      container.style.display = "flex";
      return data.json();
    })
    .then((data) => {
      // stop animation
      title.innerText = data.Title;
      desc.innerText = data.Plot;
      genre.innerText = data.Genre;
      year.innerText = data.Released;
      actors.innerText = data.Actors;
      director.innerText = data.Director;
      awards.innerText = data.Awards;
      boxOffice.innerText = data.BoxOffice;
      writer.innerText = data.Writer;
      ratings.innerText = data.imdbRating;
      poster.src = data.Poster;
    });
}