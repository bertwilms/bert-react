import React from 'react';
import Tag from '../styles/Tag';
import {
    useHistory
} from "react-router-dom";

const AboutPage = () => {

    let history = useHistory();
    const navigate = (pagina) => history.push (pagina);

    return (
        <React.Fragment>
        <h1> Wie ben ik ? </h1>
            <p> Mijn naam is Wilms Bert. </p>
            <p> Ik woon in Laakdal, samen met Greet en onze 2 kindjes, Juul ( 12 ) en Vince ( 9 ). </p>
            <Tag>Leergierig</Tag>
            <Tag>Teamplayer</Tag>
            <span style={{cursor: "pointer", color:"red"}} onClick={ ()=> navigate ( "/")}> Home </span>
        </React.Fragment>
    );
};
export default AboutPage;
