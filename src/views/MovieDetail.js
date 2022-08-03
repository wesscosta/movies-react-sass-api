import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";


export const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    
    const fetchMovie = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
        // console.log(data);
    };
  
    useEffect(() => {
        fetchMovie();
    }, []);

    const urlImg = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`

    return (
        <>
            <article>
                <h1>{movie.title}</h1>
                <img src= {urlImg} />
                <p>Popularidade: {movie.popularity}</p>
                <p>Descrição:{movie.overview}</p>
            </article>
        </>
    )

    
}