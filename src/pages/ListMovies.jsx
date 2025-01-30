import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { TiArrowRightOutline } from "react-icons/ti";
import { TiArrowLeftOutline } from "react-icons/ti";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "../components/Card";

export default function ListMovies() {
    const { movies } = useContext(MovieContext);

    // const CustomPrevArrow = (props) => (
    //     <button {...props} className="slick-prev">
    //         <TiArrowLeftOutline size={35} color="#B5C6AC" />
    //     </button>
    // );

    // const CustomNextArrow = (props) => (
    //     <button {...props} className="slick-next">
    //         <TiArrowRightOutline size={35} color="#B5C6AC" />
    //     </button>
    // );

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 992, // A 992px, mostra 3 cards
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // A 768px, mostra 2 cards
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576, // A 567px, mostra 1 card
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <main className="container py-5">
            <div className="row gy-4">
                <Slider {...settings}>
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
                </Slider>
            </div>
        </main>
    );
};