import React, { use } from "react";
import '../css/Home.css';
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/footer";
import typeSec from "../Components/typeSec";

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
            <div className="contentBox">
                <div className="typeSec">
                <div className="type"><h2>Trending</h2></div>
                <div className="typeOptions">
                    <p>Today</p>
                    <p>ThisWeek</p>
                </div>
             </div>
             <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
             </div>
            </div>
            <div className="contentBox contentBox0">
                <div className="typeSec">
                <div className="type"><h2>Latest Trailers</h2></div>
                <div className="typeOptions">
                    <p>Polular</p>
                    <p>Streaming</p>
                    <p>On TV</p>
                    <p>ForRent</p>
                    <p>InTheaters</p>
                </div>
             </div>
             <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
             </div>
            </div>
            <div className="contentBox">
                <div className="typeSec">
                <div className="type">What's Popular</div>
                <div className="typeOptions">
                    <p>Streaming</p>
                    <p>On TV</p>
                    <p>ForRent</p>
                    <p>InTheaters</p>
                </div>
             </div>
               <div className="moviesgrid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id}/>
                ))}
               </div>
            </div>
            <div className="contentBox">
                <div className="typeSec">
                <div className="type"><h2>Free To Watch</h2></div>
                <div className="typeOptions">
                    <p>Movies</p>
                    <p>TV</p>
                </div>
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