let api_key = "066a76a9610b69e2ff4d6ab3a2bd2b53";
let base_url = "https://api.themoviedb.org/3";
let movie = "movie";
let tv = "tv";
let top_rated_movies = `${base_url}/${movie}/top_rated?api_key=${api_key}`;
let top_rated_tvs = `${base_url}/${tv}/top_rated?api_key=${api_key}`;
let trending_movies = `${base_url}`;
let popular_movies = `${base_url}/movie/popular?api_key=${api_key}`;


export async function get_top_rated_movies() {
  let response = await fetch(top_rated_movies);
  let body = await response.json();
  let data = body.results;
  console.log(top_rated_movies);
  return data;
}
export async function get_top_rated_tv() {
  let response = await fetch(top_rated_tvs);
  let body = await response.json();
  let data = body.results;

  return data;
}
export async function get_popular_movies() {
  let response = await fetch(popular_movies);
  let body = await response.json();
  let data = body.results;
  return data;
}
export async function get_people(page) {
  let response = await fetch(`${base_url}/person/popular?api_key=${api_key}&language=en-US&page=${page}`);
  let body = await response.json();
  let data = body.results;
  return data;
}
export async function get_people_detail(id) {
  let response = await fetch(`${base_url}/person/${id}?api_key=${api_key}`);
  let body = await response.json();
  
  return body;
}
export async function get_movies_credits(id) {
  let response = await fetch(`${base_url}/person/${id}/combined_credits?api_key=${api_key}`)
  let body = await response.json();
  let data = body.cast;
  return data;
}
export async function get_movie_detail(id) {
  let response = await fetch(`${base_url}/movie/${id}?api_key=${api_key}`)
  let body = await response.json();
  let data = body.list;
  return body;
}
export async function get_cast(id) {
  let response = await fetch(`${base_url}/movie/${id}/credits?api_key=${api_key}`)
  let body = await response.json();
  let data = body.cast;
  return data;
}
export async function get_crew(id) {
  let response = await fetch(`${base_url}/movie/${id}/credits?api_key=${api_key}`)
  let body = await response.json();
  let data = body.crew;

  return data;
}