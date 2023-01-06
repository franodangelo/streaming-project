import { useEffect, useState } from "react";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";

export default function HeroSlide() {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 4));
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [])

    return (
        <div className="hero-slide">
            HeroSlide
        </div>
    )
}
