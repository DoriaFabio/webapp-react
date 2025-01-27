import Stars from "./Stars";

export default function ReviewComponent({ review }) {
    const { id, text, vote, name } = review;
    return (
        <div key={id} className="mycard mb-3">
            <div className="mybody">
                <h5>{name}</h5>
                <p className="card-text">{text}.</p>
                <Stars vote={vote}/>
            </div>
        </div>
    )
}