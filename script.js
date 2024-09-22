"use strict";

let numberOfFilms = prompt("Скільки фільмів ви переглянули?");
console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let q1 = prompt("Останній переглянутий фільм?"),
  q2 = prompt("Його оцінка?"),
  q3 = prompt("Останній переглянутий фільм?"),
  q4 = prompt("Його оцінка?");

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);
