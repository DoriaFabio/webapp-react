import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(getData, [id]);

    function getData() {
        axios.get(`${apiUrl}/movies/${id}`).then((res) => {
            setMovie(res.data.data);
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
            });
    }

    return (
        <div>
            <h1>{`Pagina di dettaglio del film ${id}`}</h1>
        </div>
    )
}