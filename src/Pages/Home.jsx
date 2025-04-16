import React, { use } from "react";
import '../css/Home.css';
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/footer";
import typeSec from "../Components/typeSec";

function Home () {
    const type = "Trending";
    const typeOptions = ["Today, This Week"];

    const type0 = "Latest Trailers";
    const typeOptions0 = ["Popular, Streaming, OnTV For Rent In Theaters"];

    const type2 = "What's Popular";
    const typeOptions2 = ["Streaming, On TV, For Rent, In Theaters"];

    const type3 = "Free To Watch";
    const typeOptions3 = ["Movies, TV"];

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
            <div className="contentBox">
                <div className="typeSec">
                <div className="type">{type}</div>
                <div className="typeOptions">{typeOptions}</div>
             </div>
             <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
             </div>
            </div>
            <div className="contentBox">
                <div className="typeSec">
                <div className="type">{type0}</div>
                <div className="typeOptions">{typeOptions0}</div>
             </div>
             <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
             </div>
            </div>
            <div className="contentBox">
                <div className="typeSec">
                <div className="type">{type2}</div>
                <div className="typeOptions">{typeOptions2}</div>
             </div>
               <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
               </div>
            </div>
            <div className="contentBox">
                <div className="typeSec">
                <div className="type">{type3}</div>
                <div className="typeOptions">{typeOptions3}</div>
             </div>
             <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
             </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
 
export default Home;