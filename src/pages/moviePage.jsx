import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";

import Form from "../components/Form"
import Stars from "../components/Stars";
import ReviewComponent from "../components/ReviewComponent";

export default function MoviePage() {
    const { id } = useParams();
    const { movie, movieDetails } = useContext(MovieContext);

    useEffect(() => {
        movieDetails(id); // Chiamata al fetch del contesto per ottenere i dettagli del film
    }, [id]);

    function renderReviews() {
        if (movie.reviews.length > 0) {
            return movie.reviews.map((review) => (
                <div className="col-12" key={review.id}>
                    <ReviewComponent review={review} />
                </div>
            ));
        } else {
            return <div className="col-12">No yet Reviews for this book</div>;
        }
    }

    return (
        <div>
            {movie ? (
                <>
                    {/* Sezione delle informazioni sul film */}
                    <div className="d-flex py-5 align-items-center justify-content-center">
                        <img src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} className="myimg" />
                        <div className="px-4">
                            <h1 className="text-white">{movie.title}</h1>
                            <h6 className="text-white">By {movie.director}</h6>
                            <p className="text-white">{movie.abstract}</p>
                            <Stars vote={movie.vote_average} />
                        </div>
                    </div>
                    <div className="row mb-5">{renderReviews()}</div>
                </>
            ) : (
                <p>Impossibile caricare i dettagli del film.</p>
            )}
            <Form movie_id={movie?.id} reloadReviews={movieDetails(id)}/>
        </div>
    )
}