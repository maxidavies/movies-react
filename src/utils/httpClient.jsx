const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGUyYmMzNDQ2NjY4ZDdlNWViM2EzZTRhOGUzY2JkMyIsInN1YiI6IjYxNzFkMzE2YmYwOWQxMDA0NDYxMGY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5mcUzQQooKxinEoUlTS2Tfd1MoYnOkDOUGoSd6DK-zQ",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
