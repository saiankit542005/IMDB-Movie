import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Card from "./MovieCard";

function Movies({ setTotalResults }) {
  const [movies, setMovies] = useState([]); // empty state array
  const [query, setQuery] = useState("");  // call SearchForm child component 

  const [isLoading, setIsLoading] = useState(false);
  console.log(query);
  console.log(movies);
  const handleSubmit = (e) => { //function for API call
    
    e.preventDefault();  // stop page refress
    setIsLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=b0eec689`) 
      .then((res) => {
        // .then se 
        console.log(res.data);
        setTotalResults(res.data.totalResults);
        setMovies(res.data.Search);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className="flex justify-center m-20">
        <div className="m-4">
          <SearchForm          
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            setQuery={setQuery}
          />
        </div>  
      </div>
      {isLoading ? ( 
        <p>Searching...</p> 
      ) : (
        <div className="grid grid-cols-4 p-4 gap-5">
          {movies.map((movie) => (
            <Card movie={movie} /> 
          ))}
        </div>
      )}
    </div>
  );
}
export default Movies;

 