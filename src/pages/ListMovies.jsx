import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";

const apiUrl = import.meta.env.VITE_API_URL;
const movieEndPoint = "/movies";

export default function ListMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(getData, []);

    function getData() {
        axios
            .get(`${apiUrl}${movieEndPoint}`)
            .then((res) => {
                console.log(res.data.data)
                setMovies(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
            });
    }

    // function deleteItem(e, id) {
    //     e.preventDefault();
    //     console.log(e);
    //     axios.delete(`${apiUrl}/movies/${id}`).then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //         getData();
    //     });
    // }

    return (
        <main className="container py-3">
            <div className="row gy-4">
                {movies.map((film) => (
                    <div className="col-12 col-md-4 col-lg-3" key={film.id}>
                        <Card
                            data={film}
                            // onDeleteBook={(e) => {
                            //     deleteItem(e, m.id);
                            // }}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
};