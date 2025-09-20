
// 4127c5e1

import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_KEY = 'http://www.omdbapi.com?apikey=4127c5e1';

// const movie1 = {
//     Poster: "https://m.media-amazon.com/images/M/MV5BNzg5ZjJkNGEtNzhjNy00YzI4LTlkZjItNTViNmYxNGZlZWE2XkEyXkFqcGc@._V1_SX300.jpg",
//     Title: "Superman II",
//     Type: "movie",
//     Year: "1980",
//     imdbID: "tt0081573"
// }

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const res = await fetch(`${API_KEY}&s=${title}`);
        const data = await res.json();

        // console.log(data.Search);
        setMovies(data.Search);
        setSearchTerm('')
    }

    useEffect(() => {
        searchMovies('Batman');
    }, [])

    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                    alt="searchicon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movie Found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App