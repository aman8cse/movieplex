const APIKEY = "6f3ea513e4f8b73b0f2fd646cf6d2766";
const BASEURL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASEURL}/movie/popular?api_key=${APIKEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASEURL}/search/movie?api_key=${APIKEY}&query=
        ${encodeURIComponent(
        query
         )}`
        );
    const data = await response.json();
    return data.results;
};