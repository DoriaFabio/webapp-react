import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";


const imgPath = "http://localhost:3000/images/";
export default function MoviePage({ data }) {
    const { id } = useParams();
    const { movie, movieDetails } = useContext(MovieContext);

    useEffect(() => {
        movieDetails(id); // Chiamata al fetch del contesto per ottenere i dettagli del film
    }, [id]);


    return (
        <div>
            {movie ? (
                <>
                    <div> {/* Sezione delle informazioni sul film */}
                        <h1>{movie.title}</h1>
                        <h6 className='py-2'>By {movie.director}</h6>
                        <img
                            src={`http://localhost:3000/images/${movie.image}`}
                            alt={movie.title}
                        />
                        <p>{movie.abstract}</p>
                    </div>
                </>
            ) : (
                <p>Impossibile caricare i dettagli del film.</p>
            )}
        </div>
    )
}