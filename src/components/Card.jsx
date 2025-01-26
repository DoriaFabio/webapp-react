import { NavLink } from "react-router-dom";

export default function Card({ data }) {
    const imgPath = "http://localhost:3000/images/" + data.image;
    return (
      <div className="card">
        <img src={`${imgPath}`} className="card-img-top" alt="immagine-film" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.abstract.substring(0, 60) + "..."}</p>
          <NavLink className="btn btn-primary" to={`${data.id}`}>
            Scopri di più
          </NavLink>
        </div>
      </div>
    );
  }