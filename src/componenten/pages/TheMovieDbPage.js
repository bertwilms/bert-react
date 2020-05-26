import React, { useState, useEffect } from 'react';
import {getMovie} from '../../services/tmdbService';

import {
    useHistory,
} from "react-router-dom";

const TheMovieDbPage = () => {

    const [movie, setMovie] = useState({});
    const history = useHistory();
    const navigate = (pagina) => history.push (pagina);

    useEffect(() => {
        getMovie()
            .then(setMovie)
    },[]);

    // In deze functie weet je dat Movie gezet is.
    const renderMovie = () =>  {
        return (
            <React.Fragment>
                <div>
                    The name of the movie is {movie.title} and the popularity is {movie.popularity}
                </div>
                <span style={{cursor: "pointer", color:"red"}} onClick={ ()=> navigate ( "/")}> Home </span>
            </React.Fragment>
        )
    };

    const displayNoDataFound = () => <div>
        Geen data gevonden;
    </div>;

    return movie ? renderMovie() : displayNoDataFound();
};
export default TheMovieDbPage;
