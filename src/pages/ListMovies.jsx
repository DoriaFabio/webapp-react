import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

import Card from "../components/Card";

export default function ListMovies() {
    const { movies } = useContext(MovieContext);

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