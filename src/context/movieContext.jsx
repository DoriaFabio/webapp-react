import { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);


  function getData() {
    axios
      .get(apiUrl + "/movies")
      .then((res) => {
        //console.log(res.data.data);
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
        //console.log(res.data);
        setMovie(res.data);
        console.log(res.data.reviews);
        // setReviews(res.data.film || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Finito");
      });
  }

  useEffect(getData, []);


  return (
    <MovieContext.Provider value={{
      movies,
      movie,
      reviews,
      getData,
      movieDetails,
    }}>
      {children}
    </MovieContext.Provider>
  );
};


export { MovieContext, MovieProvider };