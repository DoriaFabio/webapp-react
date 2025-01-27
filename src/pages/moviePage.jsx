import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";

import Stars from "../components/Stars";

export default function MoviePage() {
    const { id } = useParams();
    const { movie, movieDetails } = useContext(MovieContext);

    useEffect(() => {
        movieDetails(id); // Chiamata al fetch del contesto per ottenere i dettagli del film
    }, [id]);


    return (
        <div>
            {movie ? (
                <>
                {/* Sezione delle informazioni sul film */}
                    <div className="d-flex py-5 align-items-center justify-content-center"> 
                        <img src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} className="myimg" />
                        <div className="px-5">
                            <h1>{movie.title}</h1>
                            <h6>By {movie.director}</h6>
                            <p>{movie.abstract}</p>
                            <Stars vote={movie.vote_average} />
                        </div>
                    </div>
                </>
            ) : (
                <p>Impossibile caricare i dettagli del film.</p>
            )}
        </div>
    )
}