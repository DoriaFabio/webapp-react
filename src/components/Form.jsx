import { useState } from "react";

const newReview = {
    name: "",
    vote: "",
    text: "",
};


function AddReviews({ handleSubmit }) {
    const [formData, setFormData] = useState(newReview);

    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    function AddReview(e) {
        e.preventDefault();
        handleSubmit({ ...formData });
        setFormData(newReview);
    }

    return (
        <section className="my-5 container text-white">
            <h2>Aggiungi nuova recensione</h2>
            <form onSubmit={AddReview}>
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
                    />
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