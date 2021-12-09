import React from 'react';
import TimeAgo from 'timeago-react';

import {
    useHistory
} from "react-router-dom";

import HelloButton from "../hello-button";


const Homepage = () => {
    let history = useHistory();

    const navigate = (pagina) => history.push (pagina);
    const isEmpty = (value) => value === null || value === '';
    const getNameFromEmail = (email) => !isEmpty(email) ? email.split("@")[0].replace(".", " " ) : null ;
    const email = "greet.ceusters@gmail.com";
    return (
        <React.Fragment>
            <h1> My first HomePage </h1>
                <p>
                    <HelloButton name="Bert Wilms" label="Homepage button"/>
                </p>

            <TimeAgo
                datetime={'2019-05-28 08:08:08'}
                locale='vi'
            />
            <div> In deze oefening probeer ik de basis principes van elke React Applicatie te begrijpen. </div>

            <div> via de span-tag roep ik de <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate("/about")}> About me [ Span ] </span> pagina te maken. </div>

            <div> <br /> Dit is de link voor de characterpage <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate ( "/character/3")}> Characterpage </span>  </div>

            <div> <br /> Dit is de link voor de Moviedatabase <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate ( "/TheMovieDbPage")}> The Movie database </span>  </div>

            <div> {getNameFromEmail(email)}</div>
<br/>
            <div> <span style={{cursor: "pointer", color:"red"}} onClick={() => navigate ( "/fileUpload")}> File upload example </span> </div>
        </React.Fragment>
    );
};
export default Homepage;
