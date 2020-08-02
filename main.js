"use strict";

// let number = 4;

// console.log(4 / 0);
// console.log("string" * 9);

// const persone = "Alex";
// console.log(persone);

// const bool = true;
// console.log(bool);

// // console.log(somthing);

// let und;
// console.log(und);

// const obj = {
//   name: "Dima",
//   age: 25,
//   isMarried: false,
// };
// console.log(obj["age"]);
// // console.log(obj.name);

// let arr = ["blue.png", "yellow.jpg", 6, {}, []];
// console.log(arr[1]);

// alert('hello');

// const result = confirm("Че тебе здесь надо?");
// console.log(result);

// const answer = +prompt("Вам есть 18 лет?", "18");
// console.log(answer + 5);

// const answers = [];

// // answers[0] = prompt("Как ваше имя?", "");
// // answers[1] = prompt("Как вашa фамилия?", "");
// // answers[2] = prompt("Сколько вам лет?", "");

// console.log(typeof(answers));

// const category = "toys";

// console.log(`https://dmitry.com/${category}/5`);

// const user = "Dima";

// alert(`Привет, ${user}`);

// let incr = 10,
//   decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(2 + 2 * 2 === 8);

// // console.log(2*4 == 8);

// const isChecked = true,
//   isClose = true;

//   console.log(isChecked || isClose);

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
