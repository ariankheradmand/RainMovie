let api_key = "066a76a9610b69e2ff4d6ab3a2bd2b53";
let base_url = "https://api.themoviedb.org/3";
let movie = "movie";
let tv = "tv";
let top_rated_movies = `${base_url}/${movie}/top_rated?api_key=${api_key}`
let top_rated_tvs = `${base_url}/${tv}/top_rated?api_key=${api_key}`
let trending_movies = `${base_url}`;
let popular_movies = `${base_url}/movie/popular?api_key=${api_key}`

export async function get_top_rated_movies() {
   let response = await fetch((top_rated_movies));
   let body = await response.json();
   let data = body.results;
   return data;
}
export async function get_top_rated_tv() {
   let response = await fetch((top_rated_tvs));
   let body = await response.json();
   let data = body.results;
   console.log(top_rated_tvs);
   return data;
}
export async function get_popular_movies() {
   let response = await fetch(popular_movies);
   let body = await response.json();
   let data = body.results;
   

   return data;
}