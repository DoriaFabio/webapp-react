import { useState } from "react";
import axios from "axios";

const newReview = {
    name: "",
    text: "",
    vote: "",
};

const apiUrl = import.meta.env.VITE_API_URL;

function AddReviews({ movie_id, reloadReviews }) {
    const [formData, setFormData] = useState(newReview);
    // const [isFormValidated, setIsFormValidated] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        // setIsFormValidated(true);
        // if (!e.target.checkValidity()) {
        //     return;
        // }

        axios.post(`${apiUrl}/movies/${movie_id}/reviews`, formData).then((res) => {
            setFormData(newReview);
            // setIsFormValidated(false);
            reloadReviews();
        }).catch((error) => {
            console.log(error);
        })
            .finally(() => {
                console.log("Finito");
            });
    }

    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    return (
        <section className="my-5 container text-white">
            <h2>Aggiungi nuova recensione</h2>
            <form onSubmit={handleSubmit} 
            // className={`${isFormValidated ? "was-validated" : "needs-validation"}`} noValidate
            >
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Nome:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="namelHelp"
                        value={formData.name}
                        onChange={handleInput}
                        name="name"
                        required
                    />
                    {/* <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose a username.</div> */}
                    <div id="namelHelp" className="form-text text-info">
                        Scrivi il tuo nome
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        Testo recensione:
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="text"
                        value={formData.text}
                        onChange={handleInput}
                        name="text"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Valutazione:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        min="0"
                        max="5"
                        value={formData.vote}
                        onChange={handleInput}
                        name="vote"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default AddReviews;