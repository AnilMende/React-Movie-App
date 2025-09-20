
// 4127c5e1

import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_KEY = 'http://www.omdbapi.com?apikey=4127c5e1';

const movie1 = {
    Poster:"https://m.media-amazon.com/images/M/MV5BNzg5ZjJkNGEtNzhjNy00YzI4LTlkZjItNTViNmYxNGZlZWE2XkEyXkFqcGc@._V1_SX300.jpg",
    Title:"Superman II",
    Type:"movie",
    Year:"1980",
    imdbID:"tt0081573"
}

const App = () => {

    const searchMovies = async (title) => {
        const res = await fetch(`${API_KEY}&s=${title}`);
        const data = await res.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');

    }, [])

    return (
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="spiderman"
                    onChange={() => { }}
                />

                <img src={SearchIcon}
                    alt="searchicon"
                    onClick={() => { }}
                />

            </div>

            <div className="container">

                <div className="movie">

                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster 
                            : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App