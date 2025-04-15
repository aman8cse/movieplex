import React, { use } from "react";
import '../css/Home.css';
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/footer";

function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])


   const handleSearch = (e) => {
    e.preventDefault();
    alert("searched");
    };


    return(
        <div className="home">
            <div>
                <div className="intro">
                    <div className="introText">
                    <h1>Welcome.</h1>
                    <p>Millions of movies, TV shows and people to discover. Explore now.
                    </p>
                    </div>
                    <form action="" onSubmit={handleSearch} className="searchform">
                    <input type="text" placeholder="Search for Movies..." className="searchinput" />
                    <button type="submit" className="submitbutton">Search</button>
                    </form>
                </div>
            </div>
            <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
            </div>
            <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}
 
export default Home;