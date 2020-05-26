import React from 'react';
import {
    useHistory
} from "react-router-dom";

import HelloButton from "../hello-button";


const Homepage = () => {
    let history = useHistory();

    const navigate = (pagina) => history.push (pagina);

    return (
        <React.Fragment>
            <h1> My first HomePage </h1>
                <p>
                    <HelloButton name="Bert Wilms" label="Homepage button"/>
                </p>
            <div> In deze oefening probeer ik de basis principes van elke React Applicatie te begrijpen. </div>

            <div> via de span-tag roep ik de <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate("/about")}> About me [ Span ] </span> pagina te maken. </div>

            <div> <br /> Dit is de link voor de characterpage <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate ( "/character/3")}> Characterpage </span>  </div>

            <div> <br /> Dit is de link voor de Moviedatabase <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate ( "/TheMovieDbPage")}> The Movie database </span>  </div>

        </React.Fragment>
    );
};
export default Homepage;
