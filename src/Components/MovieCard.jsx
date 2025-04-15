import React from "react";
import '../css/MovieCard.css';
import { useState } from "react";

function MovieCard ({movie}) {

    const[searchQuery, setSearchQuery] = useState("");

    function onFavouriteClick() {
        alert(`${movie.title} set as favourite`)
    }

    return(
        <div className="moviecard">
            <div className="movieposter">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movieoverlay" value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}>
                   
                </div>
            </div>
            <div className="movieinfo">
                <h3>{movie.title}</h3>
                <p>{movie.releasedate?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard;