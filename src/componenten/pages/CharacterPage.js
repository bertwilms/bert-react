import React, { useState, useEffect } from 'react';
import {
    useHistory,
    useParams
} from "react-router-dom";
import Api from '../api.js' ;

const collectData = (response) => response.data ;
const CharacterPage = () => {

    const [person, setPerson] = useState(null);
    const history = useHistory();
    const { id } = useParams() ; // object destructuring
    const handleClick = (pagina) => history.push (pagina);

    useEffect(() => {
        Api.get(`people/${id}`)
           .then(collectData)
           .then(setPerson)
    });

    // In deze functie weet je dat PERSON gezet is.
    const renderPerson = () =>  {
        return (
            <React.Fragment>
                <div>
                    The name of the character is {person.name} and his year of birth is {person.birth_year}
                </div>
                <span style={{cursor: "pointer", color:"red"}} onClick={ ()=> handleClick ( "/")}> Home </span>
            </React.Fragment>
            )
    };

    const displayNoDataFound = () => <div>
        Geen data gevonden;
    </div>;

    return person ? renderPerson() : displayNoDataFound();
};
export default CharacterPage;
