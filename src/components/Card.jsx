import { NavLink } from "react-router-dom";
import style from "./Card.module.css"

export default function Card({ data }) {
    const imgPath = "http://localhost:3000/images/" + data.image;
    return (
      <div className={`${style.mycard} card`}>
        <img className={`${style.myimg}`} src={`${imgPath}`} alt="immagine-film" />
        <div className={`${style.mycardBody}`}>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.abstract.substring(0, 60) + "..."}</p>
          <NavLink className="btn btn-primary" to={`${data.id}`}>
            Scopri di più
          </NavLink>
        </div>
      </div>
    );
  }