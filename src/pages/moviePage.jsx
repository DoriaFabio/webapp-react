import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";

export default function MoviePage() {
    const {id} = useParams();
    const {movie, reviews} = useContext(MovieContext);

    return (
        <div>
            <h1>{`Pagina di dettaglio del film ${id}`}</h1>
        </div>
    )
}