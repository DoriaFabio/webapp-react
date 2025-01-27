import { FaStar, FaRegStar } from "react-icons/fa";

export default function Stars({ vote }) {
    const drawStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            //voto 1,5
            const star =
                i <= Math.ceil(parseFloat(vote)) ? (
                    <FaStar key={i} />
                ) : (
                    <FaRegStar key={i} />
                );
            stars.push(star);
        }
        return stars;
    };
    return (
        <span className="Star">{drawStars()}</span>
    );
}