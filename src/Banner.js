import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNowPlaying);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;

        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..." : str;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/w500${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center",
            }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title|| movie?.original_name||movie?.name}</h1>

                    <div className="bannner__buttons">
                        <button className="bannner__button">Play</button>
                        <button className="bannner__button">My List</button>
                    </div>
                    
                    <h1 className="banner__description">
                    {truncate(movie?.overview,150)}
                    </h1>

                </div>

                <div className="banner--fadeBottom"/>
        </header>
    );
}

export default Banner;


//  Math.floor(Math.random() * request.data.results.length-1)