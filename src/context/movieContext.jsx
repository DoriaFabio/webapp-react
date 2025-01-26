import { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(getData, []);

  function getData() {
    axios
      .get(apiUrl + "/movies")
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finito");
      });
  }

  function movieDetails(id) {
    axios
      .get(`${apiUrl}/movies/${id}`)
      .then((res) => {
        setMovie(res.data.data);
        setReviews(res.data.data.reviews || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Finito");
      });
  }

  const data = {
    movies,
    movie, 
    reviews,
    getData, 
    movieDetails,
  };

  return (
    <MovieContext.Provider value={data}>
      {children}
    </MovieContext.Provider>
  );
};


export { MovieContext, MovieProvider };